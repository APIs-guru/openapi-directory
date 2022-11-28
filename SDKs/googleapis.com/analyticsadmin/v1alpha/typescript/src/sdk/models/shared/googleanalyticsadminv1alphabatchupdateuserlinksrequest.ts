import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput } from "./googleanalyticsadminv1alphaupdateuserlinkrequest";



// GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput
/** 
 * Request message for BatchUpdateUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput })
  requests?: GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput[];
}
