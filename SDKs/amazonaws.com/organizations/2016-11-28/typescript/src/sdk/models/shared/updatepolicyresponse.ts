import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



export class UpdatePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: Policy;
}
