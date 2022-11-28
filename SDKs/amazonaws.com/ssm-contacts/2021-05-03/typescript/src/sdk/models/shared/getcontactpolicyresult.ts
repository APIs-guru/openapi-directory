import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContactPolicyResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;
}
