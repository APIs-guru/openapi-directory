import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobDetails } from "./jobdetails";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";



// MatchingBucket
/** 
 * Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
export class MatchingBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=classifiableObjectCount" })
  classifiableObjectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=classifiableSizeInBytes" })
  classifiableSizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=jobDetails" })
  jobDetails?: JobDetails;

  @SpeakeasyMetadata({ data: "json, name=objectCount" })
  objectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=objectCountByEncryptionType" })
  objectCountByEncryptionType?: ObjectCountByEncryptionType;

  @SpeakeasyMetadata({ data: "json, name=sizeInBytes" })
  sizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=sizeInBytesCompressed" })
  sizeInBytesCompressed?: number;

  @SpeakeasyMetadata({ data: "json, name=unclassifiableObjectCount" })
  unclassifiableObjectCount?: ObjectLevelStatistics;

  @SpeakeasyMetadata({ data: "json, name=unclassifiableObjectSizeInBytes" })
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
