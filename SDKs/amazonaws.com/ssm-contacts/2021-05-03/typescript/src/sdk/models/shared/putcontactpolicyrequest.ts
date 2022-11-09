import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutContactPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @Metadata({ data: "json, name=Policy" })
  policy: string;
}
