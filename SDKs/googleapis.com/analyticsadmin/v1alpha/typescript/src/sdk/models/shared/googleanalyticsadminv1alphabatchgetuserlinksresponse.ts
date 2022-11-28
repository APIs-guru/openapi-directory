import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";



// GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
/** 
 * Response message for BatchGetUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userLinks", elemType: GoogleAnalyticsAdminV1alphaUserLink })
  userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
