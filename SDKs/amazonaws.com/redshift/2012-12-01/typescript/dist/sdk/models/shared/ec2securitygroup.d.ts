import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes an Amazon EC2 security group.
**/
export declare class Ec2SecurityGroup extends SpeakeasyBase {
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    status?: string;
    tags?: Tag[];
}
