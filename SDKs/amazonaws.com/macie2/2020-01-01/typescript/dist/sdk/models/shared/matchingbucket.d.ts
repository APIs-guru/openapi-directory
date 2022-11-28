import { SpeakeasyBase } from "../../../internal/utils";
import { JobDetails } from "./jobdetails";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
/**
 * Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
export declare class MatchingBucket extends SpeakeasyBase {
    accountId?: string;
    bucketName?: string;
    classifiableObjectCount?: number;
    classifiableSizeInBytes?: number;
    jobDetails?: JobDetails;
    objectCount?: number;
    objectCountByEncryptionType?: ObjectCountByEncryptionType;
    sizeInBytes?: number;
    sizeInBytesCompressed?: number;
    unclassifiableObjectCount?: ObjectLevelStatistics;
    unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
