import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceSharePermissionSummary
/** 
 * Information about a permission that is associated with a resource share.
**/
export class ResourceSharePermissionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=defaultVersion" })
  defaultVersion?: boolean;

  @Metadata({ data: "json, name=isResourceTypeDefault" })
  isResourceTypeDefault?: boolean;

  @Metadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
