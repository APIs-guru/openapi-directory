import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaGoogleAdsLink } from "./googleanalyticsadminv1alphagoogleadslink";



// GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
/** 
 * Response message for ListGoogleAdsLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleAdsLinks", elemType: GoogleAnalyticsAdminV1alphaGoogleAdsLink })
  googleAdsLinks?: GoogleAnalyticsAdminV1alphaGoogleAdsLink[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
