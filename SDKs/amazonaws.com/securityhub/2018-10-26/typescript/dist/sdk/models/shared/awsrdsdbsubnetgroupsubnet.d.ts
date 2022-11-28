import { SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbSubnetGroupSubnetAvailabilityZone } from "./awsrdsdbsubnetgroupsubnetavailabilityzone";
/**
 * Information about a subnet in a subnet group.
**/
export declare class AwsRdsDbSubnetGroupSubnet extends SpeakeasyBase {
    subnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;
    subnetIdentifier?: string;
    subnetStatus?: string;
}
