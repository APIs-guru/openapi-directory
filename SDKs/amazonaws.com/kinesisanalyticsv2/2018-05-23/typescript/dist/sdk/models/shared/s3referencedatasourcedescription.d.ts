import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.
**/
export declare class S3ReferenceDataSourceDescription extends SpeakeasyBase {
    bucketArn: string;
    fileKey: string;
    referenceRoleArn?: string;
}
