import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";


// BatchUndeleteAlertsResponse
/** 
 * Response to batch undelete operation on alerts.
**/
export class BatchUndeleteAlertsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedAlertStatus", elemType: shared.Status })
  failedAlertStatus?: Map<string, Status>;

  @Metadata({ data: "json, name=successAlertIds" })
  successAlertIds?: string[];
}
