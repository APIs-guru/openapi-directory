import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceSharePermissionDetail
/** 
 * Information about an RAM permission.
**/
export class ResourceSharePermissionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultVersion" })
  defaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isResourceTypeDefault" })
  isResourceTypeDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
