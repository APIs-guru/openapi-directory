import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSourceMappingConfiguration } from "./eventsourcemappingconfiguration";



export class ListEventSourceMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSourceMappings", elemType: EventSourceMappingConfiguration })
  eventSourceMappings?: EventSourceMappingConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
