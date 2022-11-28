import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroup } from "./ec2securitygroup";
import { IpRange } from "./iprange";
import { Tag } from "./tag";
/**
 * Describes a security group.
**/
export declare class ClusterSecurityGroup extends SpeakeasyBase {
    clusterSecurityGroupName?: string;
    description?: string;
    ec2SecurityGroups?: Ec2SecurityGroup[];
    ipRanges?: IpRange[];
    tags?: Tag[];
}
