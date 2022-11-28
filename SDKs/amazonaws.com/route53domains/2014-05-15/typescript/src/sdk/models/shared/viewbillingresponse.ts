import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingRecord } from "./billingrecord";



// ViewBillingResponse
/** 
 * The ViewBilling response includes the following elements.
**/
export class ViewBillingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BillingRecords", elemType: BillingRecord })
  billingRecords?: BillingRecord[];

  @SpeakeasyMetadata({ data: "json, name=NextPageMarker" })
  nextPageMarker?: string;
}
