import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
**/
export declare class DisputeAmount extends SpeakeasyBase {
    convertedFromCurrency?: string;
    convertedFromValue?: string;
    currency?: string;
    exchangeRate?: string;
    value?: string;
}
