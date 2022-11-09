import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Company } from "./company";


// CreateCustomerRequest
/** 
 * Request message to create a customer.
**/
export class CreateCustomerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: Company;
}
