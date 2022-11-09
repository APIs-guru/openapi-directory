import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides the bucket name and object key name that stores the reference data.
**/
export declare class S3ReferenceDataSourceDescription extends SpeakeasyBase {
    bucketArn: string;
    fileKey: string;
    referenceRoleArn: string;
}
