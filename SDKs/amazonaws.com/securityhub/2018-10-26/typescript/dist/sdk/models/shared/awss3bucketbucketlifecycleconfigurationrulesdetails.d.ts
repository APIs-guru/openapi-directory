import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails } from "./awss3bucketbucketlifecycleconfigurationrulesabortincompletemultipartuploaddetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails } from "./awss3bucketbucketlifecycleconfigurationrulesnoncurrentversiontransitionsdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails } from "./awss3bucketbucketlifecycleconfigurationrulestransitionsdetails";
/**
 * Configuration for a lifecycle rule.
**/
export declare class AwsS3BucketBucketLifecycleConfigurationRulesDetails extends SpeakeasyBase {
    abortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;
    expirationDate?: string;
    expirationInDays?: number;
    expiredObjectDeleteMarker?: boolean;
    filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;
    id?: string;
    noncurrentVersionExpirationInDays?: number;
    noncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];
    prefix?: string;
    status?: string;
    transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
}
