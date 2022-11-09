import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReturnAddress } from "./returnaddress";


// AcceptPaymentDisputeRequest
/** 
 * This type is used by base request of the acceptPaymentDispute method.
**/
export class AcceptPaymentDisputeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=returnAddress" })
  returnAddress?: ReturnAddress;

  @Metadata({ data: "json, name=revision" })
  revision?: number;
}
