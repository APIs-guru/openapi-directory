import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPermissionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
