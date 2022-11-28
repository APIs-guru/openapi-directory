import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The log configuration for the results of the run command actions.
**/
export declare class AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails extends SpeakeasyBase {
    cloudWatchEncryptionEnabled?: boolean;
    cloudWatchLogGroupName?: string;
    s3BucketName?: string;
    s3EncryptionEnabled?: boolean;
    s3KeyPrefix?: string;
}
