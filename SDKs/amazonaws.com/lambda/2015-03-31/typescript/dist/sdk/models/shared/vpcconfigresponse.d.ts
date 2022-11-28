import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC security groups and subnets that are attached to a Lambda function.
**/
export declare class VpcConfigResponse extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
    vpcId?: string;
}
