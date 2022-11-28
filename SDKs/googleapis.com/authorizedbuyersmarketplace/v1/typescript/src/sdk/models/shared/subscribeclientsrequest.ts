import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscribeClientsRequest
/** 
 * Request message for SubscribeAuctionPackageClients.
**/
export class SubscribeClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clients" })
  clients?: string[];
}
