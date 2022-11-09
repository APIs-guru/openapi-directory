import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountLevelPermissions } from "./accountlevelpermissions";
import { BucketLevelPermissions } from "./bucketlevelpermissions";


// BucketPermissionConfiguration
/** 
 * Provides information about the account-level and bucket-level permissions settings for an S3 bucket.
**/
export class BucketPermissionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountLevelPermissions" })
  accountLevelPermissions?: AccountLevelPermissions;

  @Metadata({ data: "json, name=bucketLevelPermissions" })
  bucketLevelPermissions?: BucketLevelPermissions;
}
