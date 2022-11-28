import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
/**
 * Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB.
**/
export declare class Subnet extends SpeakeasyBase {
    availabilityZone?: AvailabilityZone;
    identifier?: string;
}
