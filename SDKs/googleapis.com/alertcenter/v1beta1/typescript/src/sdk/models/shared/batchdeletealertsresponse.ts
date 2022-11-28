import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// BatchDeleteAlertsResponse
/** 
 * Response to batch delete operation on alerts.
**/
export class BatchDeleteAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedAlertStatus", elemType: Status })
  failedAlertStatus?: Map<string, Status>;

  @SpeakeasyMetadata({ data: "json, name=successAlertIds" })
  successAlertIds?: string[];
}
