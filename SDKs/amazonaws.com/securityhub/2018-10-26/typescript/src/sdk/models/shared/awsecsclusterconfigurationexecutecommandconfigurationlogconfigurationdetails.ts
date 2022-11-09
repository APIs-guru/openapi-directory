import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails
/** 
 * The log configuration for the results of the run command actions.
**/
export class AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchEncryptionEnabled" })
  cloudWatchEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=CloudWatchLogGroupName" })
  cloudWatchLogGroupName?: string;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=S3EncryptionEnabled" })
  s3EncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=S3KeyPrefix" })
  s3KeyPrefix?: string;
}
