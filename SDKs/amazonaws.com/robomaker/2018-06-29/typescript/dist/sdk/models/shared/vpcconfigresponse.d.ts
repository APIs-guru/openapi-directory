import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * VPC configuration associated with your simulation job.
**/
export declare class VpcConfigResponse extends SpeakeasyBase {
    assignPublicIp?: boolean;
    securityGroups?: string[];
    subnets?: string[];
    vpcId?: string;
}
