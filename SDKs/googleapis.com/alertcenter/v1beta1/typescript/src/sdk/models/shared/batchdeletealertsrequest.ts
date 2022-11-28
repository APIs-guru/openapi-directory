import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDeleteAlertsRequest
/** 
 * A request to perform batch delete on alerts.
**/
export class BatchDeleteAlertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertId" })
  alertId?: string[];

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;
}
