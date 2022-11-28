import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketBucketLifecycleConfigurationDetails } from "./awss3bucketbucketlifecycleconfigurationdetails";
import { AwsS3BucketLoggingConfiguration } from "./awss3bucketloggingconfiguration";
import { AwsS3BucketNotificationConfiguration } from "./awss3bucketnotificationconfiguration";
import { AwsS3BucketWebsiteConfiguration } from "./awss3bucketwebsiteconfiguration";
import { AwsS3AccountPublicAccessBlockDetails } from "./awss3accountpublicaccessblockdetails";
import { AwsS3BucketServerSideEncryptionConfiguration } from "./awss3bucketserversideencryptionconfiguration";



// AwsS3BucketDetails
/** 
 * The details of an Amazon S3 bucket.
**/
export class AwsS3BucketDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessControlList" })
  accessControlList?: string;

  @SpeakeasyMetadata({ data: "json, name=BucketLifecycleConfiguration" })
  bucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=BucketLoggingConfiguration" })
  bucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=BucketNotificationConfiguration" })
  bucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=BucketWebsiteConfiguration" })
  bucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerName" })
  ownerName?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicAccessBlockConfiguration" })
  publicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;

  @SpeakeasyMetadata({ data: "json, name=ServerSideEncryptionConfiguration" })
  serverSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
}
