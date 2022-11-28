import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutContactPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: string;
}
