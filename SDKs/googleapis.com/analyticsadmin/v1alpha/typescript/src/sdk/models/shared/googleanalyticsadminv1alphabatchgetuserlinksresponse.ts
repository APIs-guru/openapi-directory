import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";


// GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
/** 
 * Response message for BatchGetUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=userLinks", elemType: shared.GoogleAnalyticsAdminV1alphaUserLink })
  userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
