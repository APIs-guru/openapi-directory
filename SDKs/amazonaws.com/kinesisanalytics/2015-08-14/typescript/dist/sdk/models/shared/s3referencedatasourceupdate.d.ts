import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
**/
export declare class S3ReferenceDataSourceUpdate extends SpeakeasyBase {
    bucketArnUpdate?: string;
    fileKeyUpdate?: string;
    referenceRoleArnUpdate?: string;
}
