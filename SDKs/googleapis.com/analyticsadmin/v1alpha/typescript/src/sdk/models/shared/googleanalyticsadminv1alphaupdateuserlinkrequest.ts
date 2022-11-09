import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";


// GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest
/** 
 * Request message for UpdateUserLink RPC.
**/
export class GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=userLink" })
  userLink?: GoogleAnalyticsAdminV1alphaUserLink;
}
