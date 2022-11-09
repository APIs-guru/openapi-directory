import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContactPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactArn" })
  contactArn: string;
}
