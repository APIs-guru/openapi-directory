import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";
/**
 * This type is used by base request of the acceptPaymentDispute method.
**/
export declare class AcceptPaymentDisputeRequest extends SpeakeasyBase {
    returnAddress?: ReturnAddress;
    revision?: number;
}
