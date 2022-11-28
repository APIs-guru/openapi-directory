import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
/** 
 * Response message for ProvisionAccountTicket RPC.
**/
export class GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountTicketId" })
  accountTicketId?: string;
}
