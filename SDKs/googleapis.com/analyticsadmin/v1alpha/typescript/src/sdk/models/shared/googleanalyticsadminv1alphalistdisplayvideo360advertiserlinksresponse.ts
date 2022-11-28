import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlink";



// GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse
/** 
 * Response message for ListDisplayVideo360AdvertiserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayVideo360AdvertiserLinks", elemType: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink })
  displayVideo360AdvertiserLinks?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
