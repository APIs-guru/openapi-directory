import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccountSummary } from "./googleanalyticsadminv1alphaaccountsummary";
/**
 * Response message for ListAccountSummaries RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListAccountSummariesResponse extends SpeakeasyBase {
    accountSummaries?: GoogleAnalyticsAdminV1alphaAccountSummary[];
    nextPageToken?: string;
}
