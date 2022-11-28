import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2NetworkInterfaceSecurityGroup
/** 
 * A security group associated with the network interface.
**/
export class AwsEc2NetworkInterfaceSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;
}
