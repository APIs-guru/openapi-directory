import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventSourceMappingConfiguration } from "./eventsourcemappingconfiguration";


export class ListEventSourceMappingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSourceMappings", elemType: shared.EventSourceMappingConfiguration })
  eventSourceMappings?: EventSourceMappingConfiguration[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
