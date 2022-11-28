import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccountInput } from "./googleanalyticsadminv1alphaaccount";
/**
 * Request message for ProvisionAccountTicket RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput extends SpeakeasyBase {
    account?: GoogleAnalyticsAdminV1alphaAccountInput;
    redirectUri?: string;
}
