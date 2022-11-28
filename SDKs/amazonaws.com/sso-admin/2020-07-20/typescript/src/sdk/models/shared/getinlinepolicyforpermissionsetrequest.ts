import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInlinePolicyForPermissionSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;
}
