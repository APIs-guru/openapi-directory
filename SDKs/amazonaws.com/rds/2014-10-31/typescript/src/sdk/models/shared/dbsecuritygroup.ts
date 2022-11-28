import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroup } from "./ec2securitygroup";
import { IpRange } from "./iprange";



// DbSecurityGroup
/** 
 * <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
**/
export class DbSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroupArn?: string;

  @SpeakeasyMetadata()
  dbSecurityGroupDescription?: string;

  @SpeakeasyMetadata()
  dbSecurityGroupName?: string;

  @SpeakeasyMetadata({ elemType: Ec2SecurityGroup })
  ec2SecurityGroups?: Ec2SecurityGroup[];

  @SpeakeasyMetadata({ elemType: IpRange })
  ipRanges?: IpRange[];

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
