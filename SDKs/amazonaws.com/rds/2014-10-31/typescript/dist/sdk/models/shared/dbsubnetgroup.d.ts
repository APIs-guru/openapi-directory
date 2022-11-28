import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
/**
 * <p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p>
**/
export declare class DbSubnetGroup extends SpeakeasyBase {
    dbSubnetGroupArn?: string;
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName?: string;
    subnetGroupStatus?: string;
    subnets?: Subnet[];
    vpcId?: string;
}
