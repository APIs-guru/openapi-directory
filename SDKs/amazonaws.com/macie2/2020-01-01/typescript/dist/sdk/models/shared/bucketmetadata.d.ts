import { SpeakeasyBase } from "../../../internal/utils";
import { AllowsUnencryptedObjectUploadsEnum } from "./allowsunencryptedobjectuploadsenum";
import { JobDetails } from "./jobdetails";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { BucketPublicAccess } from "./bucketpublicaccess";
import { ReplicationDetails } from "./replicationdetails";
import { BucketServerSideEncryption } from "./bucketserversideencryption";
import { SharedAccessEnum } from "./sharedaccessenum";
import { KeyValuePair } from "./keyvaluepair";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
/**
 * Provides information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
export declare class BucketMetadata extends SpeakeasyBase {
    accountId?: string;
    allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploadsEnum;
    bucketArn?: string;
    bucketCreatedAt?: Date;
    bucketName?: string;
    classifiableObjectCount?: number;
    classifiableSizeInBytes?: number;
    jobDetails?: JobDetails;
    lastUpdated?: Date;
    objectCount?: number;
    objectCountByEncryptionType?: ObjectCountByEncryptionType;
    publicAccess?: BucketPublicAccess;
    region?: string;
    replicationDetails?: ReplicationDetails;
    serverSideEncryption?: BucketServerSideEncryption;
    sharedAccess?: SharedAccessEnum;
    sizeInBytes?: number;
    sizeInBytesCompressed?: number;
    tags?: KeyValuePair[];
    unclassifiableObjectCount?: ObjectLevelStatistics;
    unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
    versioning?: boolean;
}
