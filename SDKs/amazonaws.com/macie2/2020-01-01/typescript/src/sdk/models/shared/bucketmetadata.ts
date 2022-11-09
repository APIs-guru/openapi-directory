import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AllowsUnencryptedObjectUploadsEnum } from "./allowsunencryptedobjectuploadsenum";
import { JobDetails } from "./jobdetails";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { BucketPublicAccess } from "./bucketpublicaccess";
import { ReplicationDetails } from "./replicationdetails";
import { BucketServerSideEncryption } from "./bucketserversideencryption";
import { SharedAccessEnum } from "./sharedaccessenum";
import { KeyValuePair } from "./keyvaluepair";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
import { ObjectLevelStatistics } from "./objectlevelstatistics";


// BucketMetadata
/** 
 * Provides information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
export class BucketMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=allowsUnencryptedObjectUploads" })
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploadsEnum;

  @Metadata({ data: "json, name=bucketArn" })
  bucketArn?: string;

  @Metadata({ data: "json, name=bucketCreatedAt" })
  bucketCreatedAt?: Date;

  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=classifiableObjectCount" })
  classifiableObjectCount?: number;

  @Metadata({ data: "json, name=classifiableSizeInBytes" })
  classifiableSizeInBytes?: number;

  @Metadata({ data: "json, name=jobDetails" })
  jobDetails?: JobDetails;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=objectCount" })
  objectCount?: number;

  @Metadata({ data: "json, name=objectCountByEncryptionType" })
  objectCountByEncryptionType?: ObjectCountByEncryptionType;

  @Metadata({ data: "json, name=publicAccess" })
  publicAccess?: BucketPublicAccess;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=replicationDetails" })
  replicationDetails?: ReplicationDetails;

  @Metadata({ data: "json, name=serverSideEncryption" })
  serverSideEncryption?: BucketServerSideEncryption;

  @Metadata({ data: "json, name=sharedAccess" })
  sharedAccess?: SharedAccessEnum;

  @Metadata({ data: "json, name=sizeInBytes" })
  sizeInBytes?: number;

  @Metadata({ data: "json, name=sizeInBytesCompressed" })
  sizeInBytesCompressed?: number;

  @Metadata({ data: "json, name=tags", elemType: shared.KeyValuePair })
  tags?: KeyValuePair[];

  @Metadata({ data: "json, name=unclassifiableObjectCount" })
  unclassifiableObjectCount?: ObjectLevelStatistics;

  @Metadata({ data: "json, name=unclassifiableObjectSizeInBytes" })
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;

  @Metadata({ data: "json, name=versioning" })
  versioning?: boolean;
}
