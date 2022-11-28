import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbSecurityGroupMembership
/** 
 * Specifies membership in a designated DB security group.
**/
export class DbSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
