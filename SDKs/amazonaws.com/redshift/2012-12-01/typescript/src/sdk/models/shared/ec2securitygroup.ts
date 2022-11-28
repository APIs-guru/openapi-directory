import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// Ec2SecurityGroup
/** 
 * Describes an Amazon EC2 security group.
**/
export class Ec2SecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ec2SecurityGroupName?: string;

  @SpeakeasyMetadata()
  ec2SecurityGroupOwnerId?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
