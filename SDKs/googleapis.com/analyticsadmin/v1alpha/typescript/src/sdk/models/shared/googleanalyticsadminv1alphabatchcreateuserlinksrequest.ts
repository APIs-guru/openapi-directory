import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaCreateUserLinkRequest } from "./googleanalyticsadminv1alphacreateuserlinkrequest";


// GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest
/** 
 * Request message for BatchCreateUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=notifyNewUsers" })
  notifyNewUsers?: boolean;

  @Metadata({ data: "json, name=requests", elemType: shared.GoogleAnalyticsAdminV1alphaCreateUserLinkRequest })
  requests?: GoogleAnalyticsAdminV1alphaCreateUserLinkRequest[];
}
