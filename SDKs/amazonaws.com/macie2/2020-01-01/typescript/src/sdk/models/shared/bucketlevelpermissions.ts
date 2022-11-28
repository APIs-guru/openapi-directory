import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessControlList } from "./accesscontrollist";
import { BlockPublicAccess } from "./blockpublicaccess";
import { BucketPolicy } from "./bucketpolicy";



// BucketLevelPermissions
/** 
 * Provides information about the bucket-level permissions settings for an S3 bucket.
**/
export class BucketLevelPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessControlList" })
  accessControlList?: AccessControlList;

  @SpeakeasyMetadata({ data: "json, name=blockPublicAccess" })
  blockPublicAccess?: BlockPublicAccess;

  @SpeakeasyMetadata({ data: "json, name=bucketPolicy" })
  bucketPolicy?: BucketPolicy;
}
