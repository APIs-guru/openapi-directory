import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";


// GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
/** 
 * Response message for BatchCreateUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=userLinks", elemType: shared.GoogleAnalyticsAdminV1alphaUserLink })
  userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
