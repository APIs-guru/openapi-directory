import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails } from "./awsecsservicenetworkconfigurationawsvpcconfigurationdetails";



// AwsEcsServiceNetworkConfigurationDetails
/** 
 * For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
**/
export class AwsEcsServiceNetworkConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsVpcConfiguration" })
  awsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;
}
