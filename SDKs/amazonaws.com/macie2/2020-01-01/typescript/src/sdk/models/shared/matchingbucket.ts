import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobDetails } from "./jobdetails";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
import { ObjectLevelStatistics } from "./objectlevelstatistics";


// MatchingBucket
/** 
 * Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
export class MatchingBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=classifiableObjectCount" })
  classifiableObjectCount?: number;

  @Metadata({ data: "json, name=classifiableSizeInBytes" })
  classifiableSizeInBytes?: number;

  @Metadata({ data: "json, name=jobDetails" })
  jobDetails?: JobDetails;

  @Metadata({ data: "json, name=objectCount" })
  objectCount?: number;

  @Metadata({ data: "json, name=objectCountByEncryptionType" })
  objectCountByEncryptionType?: ObjectCountByEncryptionType;

  @Metadata({ data: "json, name=sizeInBytes" })
  sizeInBytes?: number;

  @Metadata({ data: "json, name=sizeInBytesCompressed" })
  sizeInBytesCompressed?: number;

  @Metadata({ data: "json, name=unclassifiableObjectCount" })
  unclassifiableObjectCount?: ObjectLevelStatistics;

  @Metadata({ data: "json, name=unclassifiableObjectSizeInBytes" })
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
