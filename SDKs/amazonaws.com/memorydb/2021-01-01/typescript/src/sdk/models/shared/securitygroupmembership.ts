import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityGroupMembership
/** 
 * Represents a single security group and its status.
**/
export class SecurityGroupMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupId" })
  securityGroupId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
