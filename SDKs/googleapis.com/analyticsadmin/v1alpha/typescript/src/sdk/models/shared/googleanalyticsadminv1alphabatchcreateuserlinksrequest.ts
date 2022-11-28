import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput } from "./googleanalyticsadminv1alphacreateuserlinkrequest";



// GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput
/** 
 * Request message for BatchCreateUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notifyNewUsers" })
  notifyNewUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput })
  requests?: GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput[];
}
