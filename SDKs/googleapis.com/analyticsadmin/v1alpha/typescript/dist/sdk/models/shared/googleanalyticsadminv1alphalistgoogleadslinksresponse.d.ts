import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaGoogleAdsLink } from "./googleanalyticsadminv1alphagoogleadslink";
/**
 * Response message for ListGoogleAdsLinks RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse extends SpeakeasyBase {
    googleAdsLinks?: GoogleAnalyticsAdminV1alphaGoogleAdsLink[];
    nextPageToken?: string;
}
