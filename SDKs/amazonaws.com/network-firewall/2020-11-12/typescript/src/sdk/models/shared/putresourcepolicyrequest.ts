import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutResourcePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
