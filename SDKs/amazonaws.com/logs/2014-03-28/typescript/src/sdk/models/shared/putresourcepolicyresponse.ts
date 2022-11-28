import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicy } from "./resourcepolicy";



export class PutResourcePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourcePolicy" })
  resourcePolicy?: ResourcePolicy;
}
