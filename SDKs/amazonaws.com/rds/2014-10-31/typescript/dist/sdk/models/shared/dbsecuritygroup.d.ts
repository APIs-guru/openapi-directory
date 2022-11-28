import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroup } from "./ec2securitygroup";
import { IpRange } from "./iprange";
/**
 * <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
**/
export declare class DbSecurityGroup extends SpeakeasyBase {
    dbSecurityGroupArn?: string;
    dbSecurityGroupDescription?: string;
    dbSecurityGroupName?: string;
    ec2SecurityGroups?: Ec2SecurityGroup[];
    ipRanges?: IpRange[];
    ownerId?: string;
    vpcId?: string;
}
