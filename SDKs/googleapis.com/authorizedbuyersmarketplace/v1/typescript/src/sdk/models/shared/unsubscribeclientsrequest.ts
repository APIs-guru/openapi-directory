import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnsubscribeClientsRequest
/** 
 * Request message for UnsubscribeAuctionPackage.
**/
export class UnsubscribeClientsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clients" })
  clients?: string[];
}
