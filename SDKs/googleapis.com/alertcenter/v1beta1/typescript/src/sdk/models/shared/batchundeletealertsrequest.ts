import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchUndeleteAlertsRequest
/** 
 * A request to perform batch undelete on alerts.
**/
export class BatchUndeleteAlertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertId" })
  alertId?: string[];

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;
}
