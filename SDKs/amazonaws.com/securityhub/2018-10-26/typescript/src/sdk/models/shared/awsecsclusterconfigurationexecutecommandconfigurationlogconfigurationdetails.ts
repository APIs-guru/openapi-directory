import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails
/** 
 * The log configuration for the results of the run command actions.
**/
export class AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchEncryptionEnabled" })
  cloudWatchEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogGroupName" })
  cloudWatchLogGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=S3EncryptionEnabled" })
  s3EncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=S3KeyPrefix" })
  s3KeyPrefix?: string;
}
