import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccountSummary } from "./googleanalyticsadminv1alphaaccountsummary";



// GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
/** 
 * Response message for ListAccountSummaries RPC.
**/
export class GoogleAnalyticsAdminV1alphaListAccountSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountSummaries", elemType: GoogleAnalyticsAdminV1alphaAccountSummary })
  accountSummaries?: GoogleAnalyticsAdminV1alphaAccountSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
