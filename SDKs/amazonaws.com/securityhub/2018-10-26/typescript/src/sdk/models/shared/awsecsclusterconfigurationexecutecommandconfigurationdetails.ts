import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails } from "./awsecsclusterconfigurationexecutecommandconfigurationlogconfigurationdetails";



// AwsEcsClusterConfigurationExecuteCommandConfigurationDetails
/** 
 * Contains the run command configuration for the cluster.
**/
export class AwsEcsClusterConfigurationExecuteCommandConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LogConfiguration" })
  logConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=Logging" })
  logging?: string;
}
