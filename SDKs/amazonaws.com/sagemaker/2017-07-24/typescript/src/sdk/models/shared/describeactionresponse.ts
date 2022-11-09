import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";


export class DescribeActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionArn" })
  actionArn?: string;

  @Metadata({ data: "json, name=ActionName" })
  actionName?: string;

  @Metadata({ data: "json, name=ActionType" })
  actionType?: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=Source" })
  source?: ActionSource;

  @Metadata({ data: "json, name=Status" })
  status?: ActionStatusEnum;
}
