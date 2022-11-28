import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityGroupMembership
/** 
 * Represents a single security group and its status.
**/
export class SecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupId" })
  securityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
