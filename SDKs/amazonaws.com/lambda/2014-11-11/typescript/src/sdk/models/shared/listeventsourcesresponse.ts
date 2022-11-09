import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventSourceConfiguration } from "./eventsourceconfiguration";


// ListEventSourcesResponse
/** 
 * Contains a list of event sources (see <a>API_EventSourceConfiguration</a>)
**/
export class ListEventSourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSources", elemType: shared.EventSourceConfiguration })
  eventSources?: EventSourceConfiguration[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
