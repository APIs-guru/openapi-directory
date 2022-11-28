import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
/** 
 * Information about what Amazon S3 does when a multipart upload is incomplete.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DaysAfterInitiation" })
  daysAfterInitiation?: number;
}
