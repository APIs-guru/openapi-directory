import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";
import { Error } from "./error";



export class ReturnPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=returnPolicies", elemType: ReturnPolicy })
  returnPolicies?: ReturnPolicy[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
