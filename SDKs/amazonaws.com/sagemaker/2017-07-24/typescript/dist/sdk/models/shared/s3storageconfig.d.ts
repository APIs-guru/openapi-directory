import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Amazon Simple Storage (Amazon S3) location and and security configuration for <code>OfflineStore</code>.
**/
export declare class S3StorageConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    resolvedOutputS3Uri?: string;
    s3Uri: string;
}
