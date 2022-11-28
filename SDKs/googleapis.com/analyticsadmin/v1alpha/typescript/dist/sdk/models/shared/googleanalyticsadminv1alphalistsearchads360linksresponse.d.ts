import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaSearchAds360Link } from "./googleanalyticsadminv1alphasearchads360link";
/**
 * Response message for ListSearchAds360Links RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    searchAds360Links?: GoogleAnalyticsAdminV1alphaSearchAds360Link[];
}
