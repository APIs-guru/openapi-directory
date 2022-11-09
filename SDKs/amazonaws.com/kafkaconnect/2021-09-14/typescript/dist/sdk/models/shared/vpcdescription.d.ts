import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The description of the VPC in which the connector resides.
**/
export declare class VpcDescription extends SpeakeasyBase {
    securityGroups?: string[];
    subnets?: string[];
}
