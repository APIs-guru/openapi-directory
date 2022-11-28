import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccount } from "./googleanalyticsadminv1alphaaccount";
/**
 * Request message for ListAccounts RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListAccountsResponse extends SpeakeasyBase {
    accounts?: GoogleAnalyticsAdminV1alphaAccount[];
    nextPageToken?: string;
}
