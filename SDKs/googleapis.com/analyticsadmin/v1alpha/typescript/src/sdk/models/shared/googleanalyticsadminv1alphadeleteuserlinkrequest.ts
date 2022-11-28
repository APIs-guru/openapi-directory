import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest
/** 
 * Request message for DeleteUserLink RPC.
**/
export class GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
