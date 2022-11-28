import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2SecurityGroupIpPermission } from "./awsec2securitygroupippermission";



// AwsEc2SecurityGroupDetails
/** 
 * Details about an EC2 security group.
**/
export class AwsEc2SecurityGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=IpPermissions", elemType: AwsEc2SecurityGroupIpPermission })
  ipPermissions?: AwsEc2SecurityGroupIpPermission[];

  @SpeakeasyMetadata({ data: "json, name=IpPermissionsEgress", elemType: AwsEc2SecurityGroupIpPermission })
  ipPermissionsEgress?: AwsEc2SecurityGroupIpPermission[];

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
