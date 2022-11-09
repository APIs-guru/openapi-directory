import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketCountByEffectivePermission } from "./bucketcountbyeffectivepermission";
import { BucketCountByEncryptionType } from "./bucketcountbyencryptiontype";
import { BucketCountPolicyAllowsUnencryptedObjectUploads } from "./bucketcountpolicyallowsunencryptedobjectuploads";
import { BucketCountBySharedAccessType } from "./bucketcountbysharedaccesstype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
import { ObjectLevelStatistics } from "./objectlevelstatistics";


export class GetBucketStatisticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketCount" })
  bucketCount?: number;

  @Metadata({ data: "json, name=bucketCountByEffectivePermission" })
  bucketCountByEffectivePermission?: BucketCountByEffectivePermission;

  @Metadata({ data: "json, name=bucketCountByEncryptionType" })
  bucketCountByEncryptionType?: BucketCountByEncryptionType;

  @Metadata({ data: "json, name=bucketCountByObjectEncryptionRequirement" })
  bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads;

  @Metadata({ data: "json, name=bucketCountBySharedAccessType" })
  bucketCountBySharedAccessType?: BucketCountBySharedAccessType;

  @Metadata({ data: "json, name=classifiableObjectCount" })
  classifiableObjectCount?: number;

  @Metadata({ data: "json, name=classifiableSizeInBytes" })
  classifiableSizeInBytes?: number;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=objectCount" })
  objectCount?: number;

  @Metadata({ data: "json, name=sizeInBytes" })
  sizeInBytes?: number;

  @Metadata({ data: "json, name=sizeInBytesCompressed" })
  sizeInBytesCompressed?: number;

  @Metadata({ data: "json, name=unclassifiableObjectCount" })
  unclassifiableObjectCount?: ObjectLevelStatistics;

  @Metadata({ data: "json, name=unclassifiableObjectSizeInBytes" })
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
