import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PermissionSet
/** 
 * An entity that contains IAM policies.
**/
export class PermissionSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn?: string;

  @Metadata({ data: "json, name=RelayState" })
  relayState?: string;

  @Metadata({ data: "json, name=SessionDuration" })
  sessionDuration?: string;
}
