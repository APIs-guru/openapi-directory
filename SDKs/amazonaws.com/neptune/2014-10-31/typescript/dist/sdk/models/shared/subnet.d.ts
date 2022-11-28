import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
/**
 * <p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
**/
export declare class Subnet extends SpeakeasyBase {
    subnetAvailabilityZone?: AvailabilityZone;
    subnetIdentifier?: string;
    subnetStatus?: string;
}
