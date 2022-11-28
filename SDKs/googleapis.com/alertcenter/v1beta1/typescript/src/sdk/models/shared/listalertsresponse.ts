import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alert } from "./alert";



// ListAlertsResponse
/** 
 * Response message for an alert listing request.
**/
export class ListAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts", elemType: Alert })
  alerts?: Alert[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
