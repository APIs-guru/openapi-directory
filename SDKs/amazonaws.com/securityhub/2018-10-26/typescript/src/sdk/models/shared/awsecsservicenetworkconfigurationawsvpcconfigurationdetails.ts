import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails
/** 
 * For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
**/
export class AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignPublicIp" })
  assignPublicIp?: string;

  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=Subnets" })
  subnets?: string[];
}
