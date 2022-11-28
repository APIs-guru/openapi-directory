import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResolveCustomerRequest
/** 
 * Contains input to the ResolveCustomer operation.
**/
export class ResolveCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegistrationToken" })
  registrationToken: string;
}
