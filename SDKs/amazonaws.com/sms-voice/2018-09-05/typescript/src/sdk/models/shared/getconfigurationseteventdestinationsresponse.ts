import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventDestination } from "./eventdestination";


// GetConfigurationSetEventDestinationsResponse
/** 
 * An object that contains information about an event destination.
**/
export class GetConfigurationSetEventDestinationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventDestinations", elemType: shared.EventDestination })
  eventDestinations?: EventDestination[];
}
