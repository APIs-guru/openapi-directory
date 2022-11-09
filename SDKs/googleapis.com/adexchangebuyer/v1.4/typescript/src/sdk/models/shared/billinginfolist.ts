import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingInfo } from "./billinginfo";


// BillingInfoList
/** 
 * A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.
**/
export class BillingInfoList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.BillingInfo })
  items?: BillingInfo[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
