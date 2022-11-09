import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAccount } from "./googleanalyticsadminv1alphaaccount";


// GoogleAnalyticsAdminV1alphaListAccountsResponse
/** 
 * Request message for ListAccounts RPC.
**/
export class GoogleAnalyticsAdminV1alphaListAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.GoogleAnalyticsAdminV1alphaAccount })
  accounts?: GoogleAnalyticsAdminV1alphaAccount[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
