import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Identity } from "./identity";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";


// AccessPolicySummary
/** 
 * Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.
**/
export class AccessPolicySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=identity" })
  identity: Identity;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: Date;

  @Metadata({ data: "json, name=permission" })
  permission: PermissionEnum;

  @Metadata({ data: "json, name=resource" })
  resource: Resource;
}
