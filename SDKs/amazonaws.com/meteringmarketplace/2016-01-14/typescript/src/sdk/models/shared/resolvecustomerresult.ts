import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResolveCustomerResult
/** 
 * The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code.
**/
export class ResolveCustomerResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomerIdentifier" })
  customerIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductCode" })
  productCode?: string;
}
