import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaSearchAds360Link } from "./googleanalyticsadminv1alphasearchads360link";


// GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse
/** 
 * Response message for ListSearchAds360Links RPC.
**/
export class GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=searchAds360Links", elemType: shared.GoogleAnalyticsAdminV1alphaSearchAds360Link })
  searchAds360Links?: GoogleAnalyticsAdminV1alphaSearchAds360Link[];
}
