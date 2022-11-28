import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used to express the dollar value and currency used for any transaction retrieved with the Finances API, including an order total, a seller payout, a buyer refund, or a seller credit.
**/
export declare class Amount extends SpeakeasyBase {
    convertedFromCurrency?: string;
    convertedFromValue?: string;
    currency?: string;
    exchangeRate?: string;
    value?: string;
}
