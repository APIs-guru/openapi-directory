import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";
/**
 * This type is used by the request payload of the contestPaymentDispute method.
**/
export declare class ContestPaymentDisputeRequest extends SpeakeasyBase {
    returnAddress?: ReturnAddress;
    revision?: number;
}
