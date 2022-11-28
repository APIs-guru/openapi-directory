import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPermissionPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;
}
