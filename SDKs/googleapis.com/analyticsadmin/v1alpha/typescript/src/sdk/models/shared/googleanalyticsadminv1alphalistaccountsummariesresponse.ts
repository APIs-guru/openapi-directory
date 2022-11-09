import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAccountSummary } from "./googleanalyticsadminv1alphaaccountsummary";


// GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
/** 
 * Response message for ListAccountSummaries RPC.
**/
export class GoogleAnalyticsAdminV1alphaListAccountSummariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountSummaries", elemType: shared.GoogleAnalyticsAdminV1alphaAccountSummary })
  accountSummaries?: GoogleAnalyticsAdminV1alphaAccountSummary[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
