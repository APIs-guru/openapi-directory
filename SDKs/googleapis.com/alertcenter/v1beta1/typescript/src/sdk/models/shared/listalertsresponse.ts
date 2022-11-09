import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alert } from "./alert";


// ListAlertsResponse
/** 
 * Response message for an alert listing request.
**/
export class ListAlertsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts", elemType: shared.Alert })
  alerts?: Alert[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
