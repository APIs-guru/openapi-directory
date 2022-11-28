import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcSecurityGroupMembership
/** 
 * Describes the members of a VPC security group.
**/
export class VpcSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  vpcSecurityGroupId?: string;
}
