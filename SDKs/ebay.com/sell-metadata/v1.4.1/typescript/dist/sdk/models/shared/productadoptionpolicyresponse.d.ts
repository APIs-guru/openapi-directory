import { SpeakeasyBase } from "../../../internal/utils";
import { ProductAdoptionPolicy } from "./productadoptionpolicy";
import { Error } from "./error";
/**
 * This is the response object returned by a call to getProductAdoptionPolicies.
**/
export declare class ProductAdoptionPolicyResponse extends SpeakeasyBase {
    productAdoptionPolicies?: ProductAdoptionPolicy[];
    warnings?: Error[];
}
