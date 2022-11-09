import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BasePlan } from "./baseplan";
import { SubscriptionListing } from "./subscriptionlisting";
import { SubscriptionTaxAndComplianceSettings } from "./subscriptiontaxandcompliancesettings";


// Subscription
/** 
 * A single subscription for an app.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=basePlans", elemType: shared.BasePlan })
  basePlans?: BasePlan[];

  @Metadata({ data: "json, name=listings", elemType: shared.SubscriptionListing })
  listings?: SubscriptionListing[];

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=taxAndComplianceSettings" })
  taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
}
