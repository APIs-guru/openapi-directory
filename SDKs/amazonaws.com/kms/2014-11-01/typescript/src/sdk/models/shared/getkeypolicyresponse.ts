import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetKeyPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;
}
