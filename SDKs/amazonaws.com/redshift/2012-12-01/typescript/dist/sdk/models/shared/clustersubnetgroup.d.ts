import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
import { Tag } from "./tag";
/**
 * Describes a subnet group.
**/
export declare class ClusterSubnetGroup extends SpeakeasyBase {
    clusterSubnetGroupName?: string;
    description?: string;
    subnetGroupStatus?: string;
    subnets?: Subnet[];
    tags?: Tag[];
    vpcId?: string;
}
