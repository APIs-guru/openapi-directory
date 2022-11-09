import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourcePolicy } from "./resourcepolicy";


export class PutResourcePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourcePolicy" })
  resourcePolicy?: ResourcePolicy;
}
