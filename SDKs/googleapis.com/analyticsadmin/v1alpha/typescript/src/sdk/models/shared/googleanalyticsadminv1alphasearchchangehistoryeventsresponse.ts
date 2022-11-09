import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaChangeHistoryEvent } from "./googleanalyticsadminv1alphachangehistoryevent";


// GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse
/** 
 * Response message for SearchAccounts RPC.
**/
export class GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeHistoryEvents", elemType: shared.GoogleAnalyticsAdminV1alphaChangeHistoryEvent })
  changeHistoryEvents?: GoogleAnalyticsAdminV1alphaChangeHistoryEvent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
