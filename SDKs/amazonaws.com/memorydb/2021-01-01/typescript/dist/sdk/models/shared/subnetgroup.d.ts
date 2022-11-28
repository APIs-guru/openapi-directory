import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
/**
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p>CreateSubnetGroup</p> </li> <li> <p>UpdateSubnetGroup</p> </li> </ul> <p>A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.</p>
**/
export declare class SubnetGroup extends SpeakeasyBase {
    arn?: string;
    description?: string;
    name?: string;
    subnets?: Subnet[];
    vpcId?: string;
}
