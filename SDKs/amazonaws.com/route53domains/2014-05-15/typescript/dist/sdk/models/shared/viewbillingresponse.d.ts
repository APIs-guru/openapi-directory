import { SpeakeasyBase } from "../../../internal/utils";
import { BillingRecord } from "./billingrecord";
/**
 * The ViewBilling response includes the following elements.
**/
export declare class ViewBillingResponse extends SpeakeasyBase {
    billingRecords?: BillingRecord[];
    nextPageMarker?: string;
}
