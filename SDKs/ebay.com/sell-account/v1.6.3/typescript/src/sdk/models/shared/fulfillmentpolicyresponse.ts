import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FulfillmentPolicy } from "./fulfillmentpolicy";



// FulfillmentPolicyResponse
/** 
 * The response payload for requests that return a list of fulfillment policies.
**/
export class FulfillmentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fulfillmentPolicies", elemType: FulfillmentPolicy })
  fulfillmentPolicies?: FulfillmentPolicy[];

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

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
