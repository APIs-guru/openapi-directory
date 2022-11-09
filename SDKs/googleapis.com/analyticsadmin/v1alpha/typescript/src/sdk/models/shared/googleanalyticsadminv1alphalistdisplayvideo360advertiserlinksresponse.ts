import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlink";


// GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse
/** 
 * Response message for ListDisplayVideo360AdvertiserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayVideo360AdvertiserLinks", elemType: shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink })
  displayVideo360AdvertiserLinks?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
