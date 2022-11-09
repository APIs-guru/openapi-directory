import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEc2SecurityGroupIpPermission } from "./awsec2securitygroupippermission";
import { AwsEc2SecurityGroupIpPermission } from "./awsec2securitygroupippermission";


// AwsEc2SecurityGroupDetails
/** 
 * Details about an EC2 security group.
**/
export class AwsEc2SecurityGroupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=IpPermissions", elemType: shared.AwsEc2SecurityGroupIpPermission })
  ipPermissions?: AwsEc2SecurityGroupIpPermission[];

  @Metadata({ data: "json, name=IpPermissionsEgress", elemType: shared.AwsEc2SecurityGroupIpPermission })
  ipPermissionsEgress?: AwsEc2SecurityGroupIpPermission[];

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
