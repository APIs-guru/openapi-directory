import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { InAppProductListing } from "./inappproductlisting";
import { ManagedProductTaxAndComplianceSettings } from "./managedproducttaxandcompliancesettings";
import { SubscriptionTaxAndComplianceSettings } from "./subscriptiontaxandcompliancesettings";


export enum InAppProductPurchaseTypeEnum {
    PurchaseTypeUnspecified = "purchaseTypeUnspecified",
    ManagedUser = "managedUser",
    Subscription = "subscription"
}

export enum InAppProductStatusEnum {
    StatusUnspecified = "statusUnspecified",
    Active = "active",
    Inactive = "inactive"
}


// InAppProduct
/** 
 * An in-app product. The resource for InappproductsService.
**/
export class InAppProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultPrice" })
  defaultPrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=gracePeriod" })
  gracePeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=listings", elemType: InAppProductListing })
  listings?: Map<string, InAppProductListing>;

  @SpeakeasyMetadata({ data: "json, name=managedProductTaxesAndComplianceSettings" })
  managedProductTaxesAndComplianceSettings?: ManagedProductTaxAndComplianceSettings;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: Price })
  prices?: Map<string, Price>;

  @SpeakeasyMetadata({ data: "json, name=purchaseType" })
  purchaseType?: InAppProductPurchaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: InAppProductStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptionPeriod" })
  subscriptionPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionTaxesAndComplianceSettings" })
  subscriptionTaxesAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;

  @SpeakeasyMetadata({ data: "json, name=trialPeriod" })
  trialPeriod?: string;
}
