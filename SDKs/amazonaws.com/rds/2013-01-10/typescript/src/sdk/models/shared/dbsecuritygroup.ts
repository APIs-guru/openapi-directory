import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroup } from "./ec2securitygroup";
import { IpRange } from "./iprange";



export class DbSecurityGroup extends SpeakeasyBase {
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
