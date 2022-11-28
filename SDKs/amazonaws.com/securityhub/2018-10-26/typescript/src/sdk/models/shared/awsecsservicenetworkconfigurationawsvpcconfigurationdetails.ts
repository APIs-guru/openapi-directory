import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails
/** 
 * For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
**/
export class AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignPublicIp" })
  assignPublicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=Subnets" })
  subnets?: string[];
}
