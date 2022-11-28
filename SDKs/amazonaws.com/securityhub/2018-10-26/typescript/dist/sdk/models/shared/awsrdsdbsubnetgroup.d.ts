import { SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbSubnetGroupSubnet } from "./awsrdsdbsubnetgroupsubnet";
/**
 * Information about the subnet group for the database instance.
**/
export declare class AwsRdsDbSubnetGroup extends SpeakeasyBase {
    dbSubnetGroupArn?: string;
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName?: string;
    subnetGroupStatus?: string;
    subnets?: AwsRdsDbSubnetGroupSubnet[];
    vpcId?: string;
}
