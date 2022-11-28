import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";



// GoogleAnalyticsAdminV1alphaListUserLinksResponse
/** 
 * Response message for ListUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaListUserLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=userLinks", elemType: GoogleAnalyticsAdminV1alphaUserLink })
  userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
