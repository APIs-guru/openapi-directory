import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about the VPC in which the connector resides.
**/
export declare class Vpc extends SpeakeasyBase {
    securityGroups?: string[];
    subnets: string[];
}
