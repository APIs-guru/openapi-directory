import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductAdoptionPolicy } from "./productadoptionpolicy";
import { Error } from "./error";


// ProductAdoptionPolicyResponse
/** 
 * This is the response object returned by a call to getProductAdoptionPolicies.
**/
export class ProductAdoptionPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=productAdoptionPolicies", elemType: shared.ProductAdoptionPolicy })
  productAdoptionPolicies?: ProductAdoptionPolicy[];

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
