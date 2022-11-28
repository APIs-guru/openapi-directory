import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccountInput } from "./googleanalyticsadminv1alphaaccount";



// GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput
/** 
 * Request message for ProvisionAccountTicket RPC.
**/
export class GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: GoogleAnalyticsAdminV1alphaAccountInput;

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;
}
