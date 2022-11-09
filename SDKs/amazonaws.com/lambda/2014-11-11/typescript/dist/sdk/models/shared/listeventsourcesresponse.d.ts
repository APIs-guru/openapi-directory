import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSourceConfiguration } from "./eventsourceconfiguration";
/**
 * Contains a list of event sources (see <a>API_EventSourceConfiguration</a>)
**/
export declare class ListEventSourcesResponse extends SpeakeasyBase {
    eventSources?: EventSourceConfiguration[];
    nextMarker?: string;
}
