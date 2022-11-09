import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FulfillmentPolicy } from "./fulfillmentpolicy";


// FulfillmentPolicyResponse
/** 
 * The response payload for requests that return a list of fulfillment policies.
**/
export class FulfillmentPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fulfillmentPolicies", elemType: shared.FulfillmentPolicy })
  fulfillmentPolicies?: FulfillmentPolicy[];

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

  @Metadata({ data: "json, name=total" })
  total?: number;
}
