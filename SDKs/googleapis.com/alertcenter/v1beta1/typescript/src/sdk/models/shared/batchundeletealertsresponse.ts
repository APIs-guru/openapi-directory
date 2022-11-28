import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// BatchUndeleteAlertsResponse
/** 
 * Response to batch undelete operation on alerts.
**/
export class BatchUndeleteAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedAlertStatus", elemType: Status })
  failedAlertStatus?: Map<string, Status>;

  @SpeakeasyMetadata({ data: "json, name=successAlertIds" })
  successAlertIds?: string[];
}
