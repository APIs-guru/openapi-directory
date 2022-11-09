import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResolveCustomerResult
/** 
 * The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code.
**/
export class ResolveCustomerResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomerIdentifier" })
  customerIdentifier?: string;

  @Metadata({ data: "json, name=ProductCode" })
  productCode?: string;
}
