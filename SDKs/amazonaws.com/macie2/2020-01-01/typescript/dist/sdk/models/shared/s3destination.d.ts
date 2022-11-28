import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.
**/
export declare class S3Destination extends SpeakeasyBase {
    bucketName: string;
    keyPrefix?: string;
    kmsKeyArn: string;
}
