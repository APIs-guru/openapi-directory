import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscribeClientsRequest
/** 
 * Request message for SubscribeAuctionPackageClients.
**/
export class SubscribeClientsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clients" })
  clients?: string[];
}
