import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSourceMappingConfiguration } from "./eventsourcemappingconfiguration";
export declare class ListEventSourceMappingsResponse extends SpeakeasyBase {
    eventSourceMappings?: EventSourceMappingConfiguration[];
    nextMarker?: string;
}
