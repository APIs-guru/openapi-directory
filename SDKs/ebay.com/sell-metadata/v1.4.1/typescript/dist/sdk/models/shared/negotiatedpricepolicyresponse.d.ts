import { SpeakeasyBase } from "../../../internal/utils";
import { NegotiatedPricePolicy } from "./negotiatedpricepolicy";
import { Error } from "./error";
export declare class NegotiatedPricePolicyResponse extends SpeakeasyBase {
    negotiatedPricePolicies?: NegotiatedPricePolicy[];
    warnings?: Error[];
}
