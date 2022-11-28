import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { PayoutInstrument } from "./payoutinstrument";
/**
 * This type is used to express the details of one seller payout that is returned with the getPayout or getPayouts methods.
**/
export declare class Payout extends SpeakeasyBase {
    amount?: Amount;
    bankReference?: string;
    lastAttemptedPayoutDate?: string;
    payoutDate?: string;
    payoutId?: string;
    payoutInstrument?: PayoutInstrument;
    payoutMemo?: string;
    payoutStatus?: string;
    payoutStatusDescription?: string;
    transactionCount?: number;
}
