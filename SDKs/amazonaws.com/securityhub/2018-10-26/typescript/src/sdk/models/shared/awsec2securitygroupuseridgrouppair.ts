import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2SecurityGroupUserIdGroupPair
/** 
 * A relationship between a security group and a user.
**/
export class AwsEc2SecurityGroupUserIdGroupPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=PeeringStatus" })
  peeringStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId?: string;
}
