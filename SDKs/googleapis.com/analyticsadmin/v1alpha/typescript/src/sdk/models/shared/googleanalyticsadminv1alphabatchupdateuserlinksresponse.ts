import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";


// GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
/** 
 * Response message for BatchUpdateUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=userLinks", elemType: shared.GoogleAnalyticsAdminV1alphaUserLink })
  userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
