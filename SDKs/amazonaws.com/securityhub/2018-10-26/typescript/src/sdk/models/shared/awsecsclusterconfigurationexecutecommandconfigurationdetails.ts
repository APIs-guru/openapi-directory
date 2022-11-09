import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails } from "./awsecsclusterconfigurationexecutecommandconfigurationlogconfigurationdetails";


// AwsEcsClusterConfigurationExecuteCommandConfigurationDetails
/** 
 * Contains the run command configuration for the cluster.
**/
export class AwsEcsClusterConfigurationExecuteCommandConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LogConfiguration" })
  logConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;

  @Metadata({ data: "json, name=Logging" })
  logging?: string;
}
