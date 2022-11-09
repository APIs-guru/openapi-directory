import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaAccount } from "./googleanalyticsadminv1alphaaccount";


// GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest
/** 
 * Request message for ProvisionAccountTicket RPC.
**/
export class GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: GoogleAnalyticsAdminV1alphaAccount;

  @Metadata({ data: "json, name=redirectUri" })
  redirectUri?: string;
}
