import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Policy } from "./policy";


export class UpdatePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: Policy;
}
