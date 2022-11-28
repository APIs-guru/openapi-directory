import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
**/
export declare class SubscriptionPriceChange extends SpeakeasyBase {
    newPrice?: Price;
    state?: number;
}
