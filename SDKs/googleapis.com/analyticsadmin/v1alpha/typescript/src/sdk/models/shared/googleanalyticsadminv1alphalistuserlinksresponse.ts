import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";


// GoogleAnalyticsAdminV1alphaListUserLinksResponse
/** 
 * Response message for ListUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaListUserLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=userLinks", elemType: shared.GoogleAnalyticsAdminV1alphaUserLink })
  userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
