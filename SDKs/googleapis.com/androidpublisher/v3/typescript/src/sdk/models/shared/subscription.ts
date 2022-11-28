import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasePlanInput } from "./baseplan";
import { SubscriptionListing } from "./subscriptionlisting";
import { SubscriptionTaxAndComplianceSettings } from "./subscriptiontaxandcompliancesettings";
import { BasePlan } from "./baseplan";



// SubscriptionInput
/** 
 * A single subscription for an app.
**/
export class SubscriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basePlans", elemType: BasePlanInput })
  basePlans?: BasePlanInput[];

  @SpeakeasyMetadata({ data: "json, name=listings", elemType: SubscriptionListing })
  listings?: SubscriptionListing[];

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxAndComplianceSettings" })
  taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
}


// Subscription
/** 
 * A single subscription for an app.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=basePlans", elemType: BasePlan })
  basePlans?: BasePlan[];

  @SpeakeasyMetadata({ data: "json, name=listings", elemType: SubscriptionListing })
  listings?: SubscriptionListing[];

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxAndComplianceSettings" })
  taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
}
