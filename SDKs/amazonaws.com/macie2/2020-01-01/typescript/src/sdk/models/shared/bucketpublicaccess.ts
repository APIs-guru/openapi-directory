import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectivePermissionEnum } from "./effectivepermissionenum";
import { BucketPermissionConfiguration } from "./bucketpermissionconfiguration";



// BucketPublicAccess
/** 
 * Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.
**/
export class BucketPublicAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectivePermission" })
  effectivePermission?: EffectivePermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=permissionConfiguration" })
  permissionConfiguration?: BucketPermissionConfiguration;
}
