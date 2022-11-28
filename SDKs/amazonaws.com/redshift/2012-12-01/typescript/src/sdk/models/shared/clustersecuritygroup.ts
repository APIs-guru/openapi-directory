import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroup } from "./ec2securitygroup";
import { IpRange } from "./iprange";
import { Tag } from "./tag";



// ClusterSecurityGroup
/** 
 * Describes a security group.
**/
export class ClusterSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSecurityGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: Ec2SecurityGroup })
  ec2SecurityGroups?: Ec2SecurityGroup[];

  @SpeakeasyMetadata({ elemType: IpRange })
  ipRanges?: IpRange[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
