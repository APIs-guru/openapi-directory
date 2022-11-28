import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alert } from "./alert";



// ListAlertsResponse
/** 
 * Response definition for the alerts list rpc.
**/
export class ListAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts", elemType: Alert })
  alerts?: Alert[];
}
