import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityGroupIdentifier
/** 
 * Information about the device's security group.
**/
export class SecurityGroupIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: string;
}
