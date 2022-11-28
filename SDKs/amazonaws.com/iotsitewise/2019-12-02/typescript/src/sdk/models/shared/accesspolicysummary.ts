import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Identity } from "./identity";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";



// AccessPolicySummary
/** 
 * Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.
**/
export class AccessPolicySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity: Identity;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission: PermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: Resource;
}
