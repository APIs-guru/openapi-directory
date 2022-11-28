import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcSecurityGroupMembership
/** 
 * This data type is used as a response element for queries on VPC security group membership.
**/
export class VpcSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  vpcSecurityGroupId?: string;
}
