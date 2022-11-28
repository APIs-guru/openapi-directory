import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceSharePermissionSummary
/** 
 * Information about a permission that is associated with a resource share.
**/
export class ResourceSharePermissionSummary extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
