import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";



export class DescribeActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionArn" })
  actionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ActionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=ActionType" })
  actionType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: ActionSource;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ActionStatusEnum;
}
