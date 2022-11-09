import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataProperties } from "./metadataproperties";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";
import { Tag } from "./tag";


export class CreateActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionName" })
  actionName: string;

  @Metadata({ data: "json, name=ActionType" })
  actionType: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=Source" })
  source: ActionSource;

  @Metadata({ data: "json, name=Status" })
  status?: ActionStatusEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
