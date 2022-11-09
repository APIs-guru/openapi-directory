import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutInlinePolicyToPermissionSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InlinePolicy" })
  inlinePolicy: string;

  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;
}
