import { SpeakeasyBase } from "../../../internal/utils";
/**
 * provides information about the Amazon S3 Public Access Block configuration for accounts.
**/
export declare class AwsS3AccountPublicAccessBlockDetails extends SpeakeasyBase {
    blockPublicAcls?: boolean;
    blockPublicPolicy?: boolean;
    ignorePublicAcls?: boolean;
    restrictPublicBuckets?: boolean;
}
