import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePermissionSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;

  @SpeakeasyMetadata({ data: "json, name=RelayState" })
  relayState?: string;

  @SpeakeasyMetadata({ data: "json, name=SessionDuration" })
  sessionDuration?: string;
}
