import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
/** 
 * Information about what Amazon S3 does when a multipart upload is incomplete.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DaysAfterInitiation" })
  daysAfterInitiation?: number;
}
