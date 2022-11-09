import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest } from "./googleanalyticsadminv1alphaupdateuserlinkrequest";


// GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest
/** 
 * Request message for BatchUpdateUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest })
  requests?: GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest[];
}
