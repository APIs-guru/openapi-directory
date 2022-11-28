import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaSearchAds360Link } from "./googleanalyticsadminv1alphasearchads360link";



// GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse
/** 
 * Response message for ListSearchAds360Links RPC.
**/
export class GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=searchAds360Links", elemType: GoogleAnalyticsAdminV1alphaSearchAds360Link })
  searchAds360Links?: GoogleAnalyticsAdminV1alphaSearchAds360Link[];
}
