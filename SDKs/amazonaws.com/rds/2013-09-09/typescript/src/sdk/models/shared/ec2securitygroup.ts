import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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
