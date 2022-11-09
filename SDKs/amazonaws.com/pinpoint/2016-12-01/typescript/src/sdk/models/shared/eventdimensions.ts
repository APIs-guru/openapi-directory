import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeDimension } from "./attributedimension";
import { SetDimension } from "./setdimension";
import { MetricDimension } from "./metricdimension";


// EventDimensions
/** 
 * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
**/
export class EventDimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeDimension })
  attributes?: Map<string, AttributeDimension>;

  @Metadata({ data: "json, name=EventType" })
  eventType?: SetDimension;

  @Metadata({ data: "json, name=Metrics", elemType: shared.MetricDimension })
  metrics?: Map<string, MetricDimension>;
}
