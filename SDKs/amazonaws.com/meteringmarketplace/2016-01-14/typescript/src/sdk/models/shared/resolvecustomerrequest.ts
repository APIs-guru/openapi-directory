import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResolveCustomerRequest
/** 
 * Contains input to the ResolveCustomer operation.
**/
export class ResolveCustomerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegistrationToken" })
  registrationToken: string;
}
