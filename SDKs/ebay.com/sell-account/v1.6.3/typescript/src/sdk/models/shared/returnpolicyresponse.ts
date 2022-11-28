import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";



// ReturnPolicyResponse
/** 
 * The response payload for return policy requests.
**/
export class ReturnPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=returnPolicies", elemType: ReturnPolicy })
  returnPolicies?: ReturnPolicy[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
