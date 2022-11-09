import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingRecord } from "./billingrecord";


// ViewBillingResponse
/** 
 * The ViewBilling response includes the following elements.
**/
export class ViewBillingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BillingRecords", elemType: shared.BillingRecord })
  billingRecords?: BillingRecord[];

  @Metadata({ data: "json, name=NextPageMarker" })
  nextPageMarker?: string;
}
