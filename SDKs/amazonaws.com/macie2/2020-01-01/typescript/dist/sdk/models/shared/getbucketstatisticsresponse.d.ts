import { SpeakeasyBase } from "../../../internal/utils";
import { BucketCountByEffectivePermission } from "./bucketcountbyeffectivepermission";
import { BucketCountByEncryptionType } from "./bucketcountbyencryptiontype";
import { BucketCountPolicyAllowsUnencryptedObjectUploads } from "./bucketcountpolicyallowsunencryptedobjectuploads";
import { BucketCountBySharedAccessType } from "./bucketcountbysharedaccesstype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
export declare class GetBucketStatisticsResponse extends SpeakeasyBase {
    bucketCount?: number;
    bucketCountByEffectivePermission?: BucketCountByEffectivePermission;
    bucketCountByEncryptionType?: BucketCountByEncryptionType;
    bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads;
    bucketCountBySharedAccessType?: BucketCountBySharedAccessType;
    classifiableObjectCount?: number;
    classifiableSizeInBytes?: number;
    lastUpdated?: Date;
    objectCount?: number;
    sizeInBytes?: number;
    sizeInBytesCompressed?: number;
    unclassifiableObjectCount?: ObjectLevelStatistics;
    unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
