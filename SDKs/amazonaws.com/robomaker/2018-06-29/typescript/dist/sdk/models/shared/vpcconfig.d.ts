import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
**/
export declare class VpcConfig extends SpeakeasyBase {
    assignPublicIp?: boolean;
    securityGroups?: string[];
    subnets: string[];
}
