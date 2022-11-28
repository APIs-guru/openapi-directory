import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";



// GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
/** 
 * Response message for BatchCreateUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userLinks", elemType: GoogleAnalyticsAdminV1alphaUserLink })
  userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
