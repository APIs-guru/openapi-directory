import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingInfo } from "./billinginfo";
/**
 * A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.
**/
export declare class BillingInfoList extends SpeakeasyBase {
    items?: BillingInfo[];
    kind?: string;
}
