import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";



// AcceptPaymentDisputeRequest
/** 
 * This type is used by base request of the acceptPaymentDispute method.
**/
export class AcceptPaymentDisputeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=returnAddress" })
  returnAddress?: ReturnAddress;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;
}
