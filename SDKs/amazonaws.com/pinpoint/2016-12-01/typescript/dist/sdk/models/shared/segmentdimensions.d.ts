import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDimension } from "./attributedimension";
import { SegmentBehaviors } from "./segmentbehaviors";
import { SegmentDemographics } from "./segmentdemographics";
import { SegmentLocation } from "./segmentlocation";
import { MetricDimension } from "./metricdimension";
/**
 * Specifies the dimension settings for a segment.
**/
export declare class SegmentDimensions extends SpeakeasyBase {
    attributes?: Map<string, AttributeDimension>;
    behavior?: SegmentBehaviors;
    demographic?: SegmentDemographics;
    location?: SegmentLocation;
    metrics?: Map<string, MetricDimension>;
    userAttributes?: Map<string, AttributeDimension>;
}
