import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PermissionSet
/** 
 * An entity that contains IAM policies.
**/
export class PermissionSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RelayState" })
  relayState?: string;

  @SpeakeasyMetadata({ data: "json, name=SessionDuration" })
  sessionDuration?: string;
}
