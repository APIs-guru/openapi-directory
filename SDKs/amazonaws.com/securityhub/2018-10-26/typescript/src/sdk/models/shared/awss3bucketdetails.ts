import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=AccessControlList" })
  accessControlList?: string;

  @Metadata({ data: "json, name=BucketLifecycleConfiguration" })
  bucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;

  @Metadata({ data: "json, name=BucketLoggingConfiguration" })
  bucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;

  @Metadata({ data: "json, name=BucketNotificationConfiguration" })
  bucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;

  @Metadata({ data: "json, name=BucketWebsiteConfiguration" })
  bucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=OwnerName" })
  ownerName?: string;

  @Metadata({ data: "json, name=PublicAccessBlockConfiguration" })
  publicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;

  @Metadata({ data: "json, name=ServerSideEncryptionConfiguration" })
  serverSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
}
