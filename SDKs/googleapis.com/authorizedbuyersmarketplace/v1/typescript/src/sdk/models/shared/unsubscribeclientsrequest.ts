import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnsubscribeClientsRequest
/** 
 * Request message for UnsubscribeAuctionPackage.
**/
export class UnsubscribeClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clients" })
  clients?: string[];
}
