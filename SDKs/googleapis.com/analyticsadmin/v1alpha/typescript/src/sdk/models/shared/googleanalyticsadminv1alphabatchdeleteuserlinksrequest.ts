import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest } from "./googleanalyticsadminv1alphadeleteuserlinkrequest";


// GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest
/** 
 * Request message for BatchDeleteUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest })
  requests?: GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest[];
}
