import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingInfo } from "./billinginfo";



// BillingInfoList
/** 
 * A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.
**/
export class BillingInfoList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BillingInfo })
  items?: BillingInfo[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
