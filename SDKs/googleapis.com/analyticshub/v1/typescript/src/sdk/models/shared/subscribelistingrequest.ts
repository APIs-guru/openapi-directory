import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationDataset } from "./destinationdataset";



// SubscribeListingRequest
/** 
 * Message for subscribing to a listing.
**/
export class SubscribeListingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationDataset" })
  destinationDataset?: DestinationDataset;
}
