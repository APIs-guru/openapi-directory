import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessControlList } from "./accesscontrollist";
import { BlockPublicAccess } from "./blockpublicaccess";
import { BucketPolicy } from "./bucketpolicy";


// BucketLevelPermissions
/** 
 * Provides information about the bucket-level permissions settings for an S3 bucket.
**/
export class BucketLevelPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessControlList" })
  accessControlList?: AccessControlList;

  @Metadata({ data: "json, name=blockPublicAccess" })
  blockPublicAccess?: BlockPublicAccess;

  @Metadata({ data: "json, name=bucketPolicy" })
  bucketPolicy?: BucketPolicy;
}
