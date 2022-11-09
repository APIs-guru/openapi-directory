import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2NetworkInterfaceSecurityGroup
/** 
 * A security group associated with the network interface.
**/
export class AwsEc2NetworkInterfaceSecurityGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;
}
