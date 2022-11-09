import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails } from "./awsecsservicenetworkconfigurationawsvpcconfigurationdetails";


// AwsEcsServiceNetworkConfigurationDetails
/** 
 * For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
**/
export class AwsEcsServiceNetworkConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsVpcConfiguration" })
  awsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;
}
