import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompanyInput } from "./company";



// CreateCustomerRequestInput
/** 
 * Request message to create a customer.
**/
export class CreateCustomerRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: CompanyInput;
}
