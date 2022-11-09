import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReturnAddress } from "./returnaddress";


// ContestPaymentDisputeRequest
/** 
 * This type is used by the request payload of the contestPaymentDispute method.
**/
export class ContestPaymentDisputeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=returnAddress" })
  returnAddress?: ReturnAddress;

  @Metadata({ data: "json, name=revision" })
  revision?: number;
}
