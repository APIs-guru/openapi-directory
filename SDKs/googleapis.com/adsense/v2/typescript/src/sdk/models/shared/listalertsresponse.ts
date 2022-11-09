import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alert } from "./alert";


// ListAlertsResponse
/** 
 * Response definition for the alerts list rpc.
**/
export class ListAlertsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts", elemType: shared.Alert })
  alerts?: Alert[];
}
