import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUserLinkInput } from "./googleanalyticsadminv1alphauserlink";



// GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput
/** 
 * Request message for UpdateUserLink RPC.
**/
export class GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userLink" })
  userLink?: GoogleAnalyticsAdminV1alphaUserLinkInput;
}
