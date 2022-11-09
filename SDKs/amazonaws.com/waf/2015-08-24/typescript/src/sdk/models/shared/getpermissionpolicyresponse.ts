import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPermissionPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: string;
}
