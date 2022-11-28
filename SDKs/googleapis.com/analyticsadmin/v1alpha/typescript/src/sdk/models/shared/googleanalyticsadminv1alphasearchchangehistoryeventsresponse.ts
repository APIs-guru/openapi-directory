import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaChangeHistoryEvent } from "./googleanalyticsadminv1alphachangehistoryevent";



// GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse
/** 
 * Response message for SearchAccounts RPC.
**/
export class GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeHistoryEvents", elemType: GoogleAnalyticsAdminV1alphaChangeHistoryEvent })
  changeHistoryEvents?: GoogleAnalyticsAdminV1alphaChangeHistoryEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
