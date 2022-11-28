import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest } from "./googleanalyticsadminv1alphadeleteuserlinkrequest";



// GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest
/** 
 * Request message for BatchDeleteUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest })
  requests?: GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest[];
}
