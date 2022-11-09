import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventDestination } from "./eventdestination";


// GetConfigurationSetEventDestinationsResponse
/** 
 * Information about an event destination for a configuration set.
**/
export class GetConfigurationSetEventDestinationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventDestinations", elemType: shared.EventDestination })
  eventDestinations?: EventDestination[];
}
