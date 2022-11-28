import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaChangeHistoryEvent } from "./googleanalyticsadminv1alphachangehistoryevent";
/**
 * Response message for SearchAccounts RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse extends SpeakeasyBase {
    changeHistoryEvents?: GoogleAnalyticsAdminV1alphaChangeHistoryEvent[];
    nextPageToken?: string;
}
