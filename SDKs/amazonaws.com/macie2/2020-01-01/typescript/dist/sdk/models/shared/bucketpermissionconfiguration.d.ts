import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLevelPermissions } from "./accountlevelpermissions";
import { BucketLevelPermissions } from "./bucketlevelpermissions";
/**
 * Provides information about the account-level and bucket-level permissions settings for an S3 bucket.
**/
export declare class BucketPermissionConfiguration extends SpeakeasyBase {
    accountLevelPermissions?: AccountLevelPermissions;
    bucketLevelPermissions?: BucketLevelPermissions;
}
