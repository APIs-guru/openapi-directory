import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPermissionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
