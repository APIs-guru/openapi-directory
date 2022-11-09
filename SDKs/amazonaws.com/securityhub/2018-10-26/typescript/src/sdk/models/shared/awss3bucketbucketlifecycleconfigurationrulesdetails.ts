import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails } from "./awss3bucketbucketlifecycleconfigurationrulesabortincompletemultipartuploaddetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails } from "./awss3bucketbucketlifecycleconfigurationrulesnoncurrentversiontransitionsdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails } from "./awss3bucketbucketlifecycleconfigurationrulestransitionsdetails";


// AwsS3BucketBucketLifecycleConfigurationRulesDetails
/** 
 * Configuration for a lifecycle rule.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbortIncompleteMultipartUpload" })
  abortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;

  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: string;

  @Metadata({ data: "json, name=ExpirationInDays" })
  expirationInDays?: number;

  @Metadata({ data: "json, name=ExpiredObjectDeleteMarker" })
  expiredObjectDeleteMarker?: boolean;

  @Metadata({ data: "json, name=Filter" })
  filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=NoncurrentVersionExpirationInDays" })
  noncurrentVersionExpirationInDays?: number;

  @Metadata({ data: "json, name=NoncurrentVersionTransitions", elemType: shared.AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails })
  noncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=Transitions", elemType: shared.AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails })
  transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
}
