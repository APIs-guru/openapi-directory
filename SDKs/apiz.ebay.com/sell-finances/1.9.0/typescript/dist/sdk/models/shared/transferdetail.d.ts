import { SpeakeasyBase } from "../../../internal/utils";
import { BalanceAdjustment } from "./balanceadjustment";
import { Charge } from "./charge";
import { Amount } from "./amount";
/**
 * This type is used by the transferDetail container, which provides more details about the transfer and the charge(s) associated with the transfer.
**/
export declare class TransferDetail extends SpeakeasyBase {
    balanceAdjustment?: BalanceAdjustment;
    charges?: Charge[];
    totalChargeNetAmount?: Amount;
}
