import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { Outpost } from "./outpost";
/**
 *  This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation.
**/
export declare class Subnet extends SpeakeasyBase {
    subnetAvailabilityZone?: AvailabilityZone;
    subnetIdentifier?: string;
    subnetOutpost?: Outpost;
    subnetStatus?: string;
}
