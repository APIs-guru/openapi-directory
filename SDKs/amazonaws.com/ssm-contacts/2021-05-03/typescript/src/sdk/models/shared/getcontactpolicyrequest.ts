import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContactPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn: string;
}
