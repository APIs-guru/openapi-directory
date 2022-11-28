import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an Amazon S3 bucket for logging audio conversations
**/
export declare class S3BucketLogDestination extends SpeakeasyBase {
    kmsKeyArn?: string;
    logPrefix: string;
    s3BucketArn: string;
}
