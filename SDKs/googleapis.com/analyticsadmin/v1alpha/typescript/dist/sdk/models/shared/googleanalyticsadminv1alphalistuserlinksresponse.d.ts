import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";
/**
 * Response message for ListUserLinks RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListUserLinksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
