import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccount } from "./googleanalyticsadminv1alphaaccount";



// GoogleAnalyticsAdminV1alphaListAccountsResponse
/** 
 * Request message for ListAccounts RPC.
**/
export class GoogleAnalyticsAdminV1alphaListAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GoogleAnalyticsAdminV1alphaAccount })
  accounts?: GoogleAnalyticsAdminV1alphaAccount[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
