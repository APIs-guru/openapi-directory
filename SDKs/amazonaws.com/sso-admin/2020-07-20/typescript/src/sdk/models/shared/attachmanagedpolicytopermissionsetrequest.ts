import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachManagedPolicyToPermissionSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=ManagedPolicyArn" })
  managedPolicyArn: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;
}
