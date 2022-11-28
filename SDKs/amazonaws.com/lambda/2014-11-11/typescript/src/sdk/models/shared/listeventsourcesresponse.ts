import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSourceConfiguration } from "./eventsourceconfiguration";



// ListEventSourcesResponse
/** 
 * Contains a list of event sources (see <a>API_EventSourceConfiguration</a>)
**/
export class ListEventSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSources", elemType: EventSourceConfiguration })
  eventSources?: EventSourceConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
