import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsClusterConfigurationExecuteCommandConfigurationDetails } from "./awsecsclusterconfigurationexecutecommandconfigurationdetails";



// AwsEcsClusterConfigurationDetails
/** 
 * The run command configuration for the cluster.
**/
export class AwsEcsClusterConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecuteCommandConfiguration" })
  executeCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails;
}
