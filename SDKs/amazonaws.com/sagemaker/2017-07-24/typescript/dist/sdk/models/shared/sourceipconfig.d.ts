import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.
**/
export declare class SourceIpConfig extends SpeakeasyBase {
    cidrs: string[];
}
