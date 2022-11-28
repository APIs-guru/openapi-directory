import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
export declare class DbSubnetGroup extends SpeakeasyBase {
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName?: string;
    subnetGroupStatus?: string;
    subnets?: Subnet[];
    vpcId?: string;
}
