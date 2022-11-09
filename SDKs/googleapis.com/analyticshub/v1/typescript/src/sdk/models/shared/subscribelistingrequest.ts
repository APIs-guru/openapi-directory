import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationDataset } from "./destinationdataset";


// SubscribeListingRequest
/** 
 * Message for subscribing to a listing.
**/
export class SubscribeListingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationDataset" })
  destinationDataset?: DestinationDataset;
}
