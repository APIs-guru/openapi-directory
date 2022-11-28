import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountLevelPermissions } from "./accountlevelpermissions";
import { BucketLevelPermissions } from "./bucketlevelpermissions";



// BucketPermissionConfiguration
/** 
 * Provides information about the account-level and bucket-level permissions settings for an S3 bucket.
**/
export class BucketPermissionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountLevelPermissions" })
  accountLevelPermissions?: AccountLevelPermissions;

  @SpeakeasyMetadata({ data: "json, name=bucketLevelPermissions" })
  bucketLevelPermissions?: BucketLevelPermissions;
}
