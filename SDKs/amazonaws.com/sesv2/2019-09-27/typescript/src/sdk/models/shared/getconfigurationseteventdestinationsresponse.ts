import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventDestination } from "./eventdestination";



// GetConfigurationSetEventDestinationsResponse
/** 
 * Information about an event destination for a configuration set.
**/
export class GetConfigurationSetEventDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventDestinations", elemType: EventDestination })
  eventDestinations?: EventDestination[];
}
