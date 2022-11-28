import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";



// ContestPaymentDisputeRequest
/** 
 * This type is used by the request payload of the contestPaymentDispute method.
**/
export class ContestPaymentDisputeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=returnAddress" })
  returnAddress?: ReturnAddress;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;
}
