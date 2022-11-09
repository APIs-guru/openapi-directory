import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPermissionPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
