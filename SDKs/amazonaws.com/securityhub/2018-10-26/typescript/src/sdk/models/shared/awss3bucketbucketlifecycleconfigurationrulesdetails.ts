import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails } from "./awss3bucketbucketlifecycleconfigurationrulesabortincompletemultipartuploaddetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails } from "./awss3bucketbucketlifecycleconfigurationrulesnoncurrentversiontransitionsdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails } from "./awss3bucketbucketlifecycleconfigurationrulestransitionsdetails";



// AwsS3BucketBucketLifecycleConfigurationRulesDetails
/** 
 * Configuration for a lifecycle rule.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbortIncompleteMultipartUpload" })
  abortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationInDays" })
  expirationInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=ExpiredObjectDeleteMarker" })
  expiredObjectDeleteMarker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=NoncurrentVersionExpirationInDays" })
  noncurrentVersionExpirationInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=NoncurrentVersionTransitions", elemType: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails })
  noncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=Transitions", elemType: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails })
  transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
}
