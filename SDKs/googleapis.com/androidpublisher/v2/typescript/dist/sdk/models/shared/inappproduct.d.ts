import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { InAppProductListing } from "./inappproductlisting";
export declare class InAppProduct extends SpeakeasyBase {
    defaultLanguage?: string;
    defaultPrice?: Price;
    gracePeriod?: string;
    listings?: Map<string, InAppProductListing>;
    packageName?: string;
    prices?: Map<string, Price>;
    purchaseType?: string;
    sku?: string;
    status?: string;
    subscriptionPeriod?: string;
    trialPeriod?: string;
}
