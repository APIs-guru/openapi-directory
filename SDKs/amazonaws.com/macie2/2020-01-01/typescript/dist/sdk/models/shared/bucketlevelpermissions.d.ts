import { SpeakeasyBase } from "../../../internal/utils";
import { AccessControlList } from "./accesscontrollist";
import { BlockPublicAccess } from "./blockpublicaccess";
import { BucketPolicy } from "./bucketpolicy";
/**
 * Provides information about the bucket-level permissions settings for an S3 bucket.
**/
export declare class BucketLevelPermissions extends SpeakeasyBase {
    accessControlList?: AccessControlList;
    blockPublicAccess?: BlockPublicAccess;
    bucketPolicy?: BucketPolicy;
}
