import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ec2SecurityGroup
/** 
 * <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>AuthorizeDBSecurityGroupIngress</code> </p> </li> <li> <p> <code>DescribeDBSecurityGroups</code> </p> </li> <li> <p> <code>RevokeDBSecurityGroupIngress</code> </p> </li> </ul>
**/
export class Ec2SecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ec2SecurityGroupId?: string;

  @SpeakeasyMetadata()
  ec2SecurityGroupName?: string;

  @SpeakeasyMetadata()
  ec2SecurityGroupOwnerId?: string;

  @SpeakeasyMetadata()
  status?: string;
}
