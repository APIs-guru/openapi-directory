import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoRenewingPlan } from "./autorenewingplan";
import { PrepaidPlan } from "./prepaidplan";


// SubscriptionPurchaseLineItem
/** 
 * Item-level info for a subscription purchase.
**/
export class SubscriptionPurchaseLineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRenewingPlan" })
  autoRenewingPlan?: AutoRenewingPlan;

  @Metadata({ data: "json, name=expiryTime" })
  expiryTime?: string;

  @Metadata({ data: "json, name=prepaidPlan" })
  prepaidPlan?: PrepaidPlan;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
