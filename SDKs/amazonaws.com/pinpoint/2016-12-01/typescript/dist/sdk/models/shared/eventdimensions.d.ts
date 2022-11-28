import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDimension } from "./attributedimension";
import { SetDimension } from "./setdimension";
import { MetricDimension } from "./metricdimension";
/**
 * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
**/
export declare class EventDimensions extends SpeakeasyBase {
    attributes?: Map<string, AttributeDimension>;
    eventType?: SetDimension;
    metrics?: Map<string, MetricDimension>;
}
