import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeDimension } from "./attributedimension";
import { SetDimension } from "./setdimension";
import { MetricDimension } from "./metricdimension";



// EventDimensions
/** 
 * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
**/
export class EventDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeDimension })
  attributes?: Map<string, AttributeDimension>;

  @SpeakeasyMetadata({ data: "json, name=EventType" })
  eventType?: SetDimension;

  @SpeakeasyMetadata({ data: "json, name=Metrics", elemType: MetricDimension })
  metrics?: Map<string, MetricDimension>;
}
