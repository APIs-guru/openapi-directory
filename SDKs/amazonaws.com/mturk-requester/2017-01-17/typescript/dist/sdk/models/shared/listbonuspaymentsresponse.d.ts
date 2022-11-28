import { SpeakeasyBase } from "../../../internal/utils";
import { BonusPayment } from "./bonuspayment";
export declare class ListBonusPaymentsResponse extends SpeakeasyBase {
    bonusPayments?: BonusPayment[];
    nextToken?: string;
    numResults?: number;
}
