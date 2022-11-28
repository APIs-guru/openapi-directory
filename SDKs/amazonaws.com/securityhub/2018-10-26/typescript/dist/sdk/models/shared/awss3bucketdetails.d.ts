import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketBucketLifecycleConfigurationDetails } from "./awss3bucketbucketlifecycleconfigurationdetails";
import { AwsS3BucketLoggingConfiguration } from "./awss3bucketloggingconfiguration";
import { AwsS3BucketNotificationConfiguration } from "./awss3bucketnotificationconfiguration";
import { AwsS3BucketWebsiteConfiguration } from "./awss3bucketwebsiteconfiguration";
import { AwsS3AccountPublicAccessBlockDetails } from "./awss3accountpublicaccessblockdetails";
import { AwsS3BucketServerSideEncryptionConfiguration } from "./awss3bucketserversideencryptionconfiguration";
/**
 * The details of an Amazon S3 bucket.
**/
export declare class AwsS3BucketDetails extends SpeakeasyBase {
    accessControlList?: string;
    bucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;
    bucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;
    bucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;
    bucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;
    createdAt?: string;
    ownerId?: string;
    ownerName?: string;
    publicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;
    serverSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
}
