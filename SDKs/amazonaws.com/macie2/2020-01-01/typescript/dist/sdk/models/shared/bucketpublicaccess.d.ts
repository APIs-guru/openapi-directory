import { SpeakeasyBase } from "../../../internal/utils";
import { EffectivePermissionEnum } from "./effectivepermissionenum";
import { BucketPermissionConfiguration } from "./bucketpermissionconfiguration";
/**
 * Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.
**/
export declare class BucketPublicAccess extends SpeakeasyBase {
    effectivePermission?: EffectivePermissionEnum;
    permissionConfiguration?: BucketPermissionConfiguration;
}
