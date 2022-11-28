import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowsUnencryptedObjectUploadsEnum } from "./allowsunencryptedobjectuploadsenum";
import { JobDetails } from "./jobdetails";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { BucketPublicAccess } from "./bucketpublicaccess";
import { ReplicationDetails } from "./replicationdetails";
import { BucketServerSideEncryption } from "./bucketserversideencryption";
import { SharedAccessEnum } from "./sharedaccessenum";
import { KeyValuePair } from "./keyvaluepair";
import { ObjectLevelStatistics } from "./objectlevelstatistics";



// BucketMetadata
/** 
 * Provides information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
export class BucketMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=allowsUnencryptedObjectUploads" })
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploadsEnum;

  @SpeakeasyMetadata({ data: "json, name=bucketArn" })
  bucketArn?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketCreatedAt" })
  bucketCreatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=classifiableObjectCount" })
  classifiableObjectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=classifiableSizeInBytes" })
  classifiableSizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=jobDetails" })
  jobDetails?: JobDetails;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=objectCount" })
  objectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=objectCountByEncryptionType" })
  objectCountByEncryptionType?: ObjectCountByEncryptionType;

  @SpeakeasyMetadata({ data: "json, name=publicAccess" })
  publicAccess?: BucketPublicAccess;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationDetails" })
  replicationDetails?: ReplicationDetails;

  @SpeakeasyMetadata({ data: "json, name=serverSideEncryption" })
  serverSideEncryption?: BucketServerSideEncryption;

  @SpeakeasyMetadata({ data: "json, name=sharedAccess" })
  sharedAccess?: SharedAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=sizeInBytes" })
  sizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=sizeInBytesCompressed" })
  sizeInBytesCompressed?: number;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: KeyValuePair })
  tags?: KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=unclassifiableObjectCount" })
  unclassifiableObjectCount?: ObjectLevelStatistics;

  @SpeakeasyMetadata({ data: "json, name=unclassifiableObjectSizeInBytes" })
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;

  @SpeakeasyMetadata({ data: "json, name=versioning" })
  versioning?: boolean;
}
