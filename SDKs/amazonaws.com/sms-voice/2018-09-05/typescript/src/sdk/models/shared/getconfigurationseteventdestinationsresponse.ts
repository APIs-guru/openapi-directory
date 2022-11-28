import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventDestination } from "./eventdestination";



// GetConfigurationSetEventDestinationsResponse
/** 
 * An object that contains information about an event destination.
**/
export class GetConfigurationSetEventDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventDestinations", elemType: EventDestination })
  eventDestinations?: EventDestination[];
}
