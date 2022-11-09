import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsEcsClusterConfigurationExecuteCommandConfigurationDetails } from "./awsecsclusterconfigurationexecutecommandconfigurationdetails";


// AwsEcsClusterConfigurationDetails
/** 
 * The run command configuration for the cluster.
**/
export class AwsEcsClusterConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecuteCommandConfiguration" })
  executeCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails;
}
