import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlink";
/**
 * Response message for ListDisplayVideo360AdvertiserLinks RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse extends SpeakeasyBase {
    displayVideo360AdvertiserLinks?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink[];
    nextPageToken?: string;
}
