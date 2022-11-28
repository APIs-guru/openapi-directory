import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>AuthorizeDBSecurityGroupIngress</code> </p> </li> <li> <p> <code>DescribeDBSecurityGroups</code> </p> </li> <li> <p> <code>RevokeDBSecurityGroupIngress</code> </p> </li> </ul>
**/
export declare class Ec2SecurityGroup extends SpeakeasyBase {
    ec2SecurityGroupId?: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    status?: string;
}
