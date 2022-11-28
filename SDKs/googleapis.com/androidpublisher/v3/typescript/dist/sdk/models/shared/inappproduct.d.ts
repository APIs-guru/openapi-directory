import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { InAppProductListing } from "./inappproductlisting";
import { ManagedProductTaxAndComplianceSettings } from "./managedproducttaxandcompliancesettings";
import { SubscriptionTaxAndComplianceSettings } from "./subscriptiontaxandcompliancesettings";
export declare enum InAppProductPurchaseTypeEnum {
    PurchaseTypeUnspecified = "purchaseTypeUnspecified",
    ManagedUser = "managedUser",
    Subscription = "subscription"
}
export declare enum InAppProductStatusEnum {
    StatusUnspecified = "statusUnspecified",
    Active = "active",
    Inactive = "inactive"
}
/**
 * An in-app product. The resource for InappproductsService.
**/
export declare class InAppProduct extends SpeakeasyBase {
    defaultLanguage?: string;
    defaultPrice?: Price;
    gracePeriod?: string;
    listings?: Map<string, InAppProductListing>;
    managedProductTaxesAndComplianceSettings?: ManagedProductTaxAndComplianceSettings;
    packageName?: string;
    prices?: Map<string, Price>;
    purchaseType?: InAppProductPurchaseTypeEnum;
    sku?: string;
    status?: InAppProductStatusEnum;
    subscriptionPeriod?: string;
    subscriptionTaxesAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
    trialPeriod?: string;
}
