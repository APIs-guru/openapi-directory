import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutInlinePolicyToPermissionSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InlinePolicy" })
  inlinePolicy: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;
}
