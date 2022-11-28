import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts.
**/
export declare class BucketCountBySharedAccessType extends SpeakeasyBase {
    external?: number;
    internal?: number;
    notShared?: number;
    unknown?: number;
}
