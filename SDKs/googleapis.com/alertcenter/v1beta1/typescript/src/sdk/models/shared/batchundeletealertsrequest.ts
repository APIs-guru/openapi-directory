import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchUndeleteAlertsRequest
/** 
 * A request to perform batch undelete on alerts.
**/
export class BatchUndeleteAlertsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertId" })
  alertId?: string[];

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;
}
