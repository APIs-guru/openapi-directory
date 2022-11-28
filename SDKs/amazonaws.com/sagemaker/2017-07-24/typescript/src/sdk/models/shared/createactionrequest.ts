import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";
import { Tag } from "./tag";



export class CreateActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionName" })
  actionName: string;

  @SpeakeasyMetadata({ data: "json, name=ActionType" })
  actionType: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: ActionSource;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ActionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
