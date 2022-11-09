import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnPolicy } from "./returnpolicy";


// ReturnPolicyResponse
/** 
 * The response payload for return policy requests.
**/
export class ReturnPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=returnPolicies", elemType: shared.ReturnPolicy })
  returnPolicies?: ReturnPolicy[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
