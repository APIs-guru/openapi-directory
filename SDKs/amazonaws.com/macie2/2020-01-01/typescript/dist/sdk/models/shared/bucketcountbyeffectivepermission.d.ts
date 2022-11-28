import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the number of S3 buckets that are publicly accessible based on a combination of permissions settings for each bucket.
**/
export declare class BucketCountByEffectivePermission extends SpeakeasyBase {
    publiclyAccessible?: number;
    publiclyReadable?: number;
    publiclyWritable?: number;
    unknown?: number;
}
