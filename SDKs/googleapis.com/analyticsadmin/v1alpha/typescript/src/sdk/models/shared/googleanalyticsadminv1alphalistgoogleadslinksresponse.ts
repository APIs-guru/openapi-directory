import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaGoogleAdsLink } from "./googleanalyticsadminv1alphagoogleadslink";


// GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
/** 
 * Response message for ListGoogleAdsLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleAdsLinks", elemType: shared.GoogleAnalyticsAdminV1alphaGoogleAdsLink })
  googleAdsLinks?: GoogleAnalyticsAdminV1alphaGoogleAdsLink[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
