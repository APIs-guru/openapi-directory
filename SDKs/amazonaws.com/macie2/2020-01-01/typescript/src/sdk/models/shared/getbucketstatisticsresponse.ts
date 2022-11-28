import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketCountByEffectivePermission } from "./bucketcountbyeffectivepermission";
import { BucketCountByEncryptionType } from "./bucketcountbyencryptiontype";
import { BucketCountPolicyAllowsUnencryptedObjectUploads } from "./bucketcountpolicyallowsunencryptedobjectuploads";
import { BucketCountBySharedAccessType } from "./bucketcountbysharedaccesstype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";



export class GetBucketStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketCount" })
  bucketCount?: number;

  @SpeakeasyMetadata({ data: "json, name=bucketCountByEffectivePermission" })
  bucketCountByEffectivePermission?: BucketCountByEffectivePermission;

  @SpeakeasyMetadata({ data: "json, name=bucketCountByEncryptionType" })
  bucketCountByEncryptionType?: BucketCountByEncryptionType;

  @SpeakeasyMetadata({ data: "json, name=bucketCountByObjectEncryptionRequirement" })
  bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads;

  @SpeakeasyMetadata({ data: "json, name=bucketCountBySharedAccessType" })
  bucketCountBySharedAccessType?: BucketCountBySharedAccessType;

  @SpeakeasyMetadata({ data: "json, name=classifiableObjectCount" })
  classifiableObjectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=classifiableSizeInBytes" })
  classifiableSizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=objectCount" })
  objectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=sizeInBytes" })
  sizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=sizeInBytesCompressed" })
  sizeInBytesCompressed?: number;

  @SpeakeasyMetadata({ data: "json, name=unclassifiableObjectCount" })
  unclassifiableObjectCount?: ObjectLevelStatistics;

  @SpeakeasyMetadata({ data: "json, name=unclassifiableObjectSizeInBytes" })
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
