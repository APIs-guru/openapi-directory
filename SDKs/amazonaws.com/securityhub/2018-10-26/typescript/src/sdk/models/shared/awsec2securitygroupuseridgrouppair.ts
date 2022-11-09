import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2SecurityGroupUserIdGroupPair
/** 
 * A relationship between a security group and a user.
**/
export class AwsEc2SecurityGroupUserIdGroupPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=PeeringStatus" })
  peeringStatus?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @Metadata({ data: "json, name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId?: string;
}
