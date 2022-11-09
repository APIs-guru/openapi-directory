import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePermissionSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;

  @Metadata({ data: "json, name=RelayState" })
  relayState?: string;

  @Metadata({ data: "json, name=SessionDuration" })
  sessionDuration?: string;
}
