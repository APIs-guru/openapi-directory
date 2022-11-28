import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePermissionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
