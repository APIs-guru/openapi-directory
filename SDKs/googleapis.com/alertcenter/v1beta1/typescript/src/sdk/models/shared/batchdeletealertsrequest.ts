import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDeleteAlertsRequest
/** 
 * A request to perform batch delete on alerts.
**/
export class BatchDeleteAlertsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertId" })
  alertId?: string[];

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;
}
