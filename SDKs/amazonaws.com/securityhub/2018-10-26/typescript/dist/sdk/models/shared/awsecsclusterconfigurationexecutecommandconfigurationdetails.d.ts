import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails } from "./awsecsclusterconfigurationexecutecommandconfigurationlogconfigurationdetails";
/**
 * Contains the run command configuration for the cluster.
**/
export declare class AwsEcsClusterConfigurationExecuteCommandConfigurationDetails extends SpeakeasyBase {
    kmsKeyId?: string;
    logConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;
    logging?: string;
}
