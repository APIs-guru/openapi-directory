import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityGroupIdentifier
/** 
 * Information about the device's security group.
**/
export class SecurityGroupIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=groupName" })
  groupName?: string;
}
