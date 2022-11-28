import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
**/
export declare class AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails extends SpeakeasyBase {
    assignPublicIp?: string;
    securityGroups?: string[];
    subnets?: string[];
}
