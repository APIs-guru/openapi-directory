import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";


// BatchDeleteAlertsResponse
/** 
 * Response to batch delete operation on alerts.
**/
export class BatchDeleteAlertsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedAlertStatus", elemType: shared.Status })
  failedAlertStatus?: Map<string, Status>;

  @Metadata({ data: "json, name=successAlertIds" })
  successAlertIds?: string[];
}
