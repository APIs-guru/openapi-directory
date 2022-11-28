import { SpeakeasyBase } from "../../../internal/utils";
import { FulfillmentPolicy } from "./fulfillmentpolicy";
/**
 * The response payload for requests that return a list of fulfillment policies.
**/
export declare class FulfillmentPolicyResponse extends SpeakeasyBase {
    fulfillmentPolicies?: FulfillmentPolicy[];
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
}
