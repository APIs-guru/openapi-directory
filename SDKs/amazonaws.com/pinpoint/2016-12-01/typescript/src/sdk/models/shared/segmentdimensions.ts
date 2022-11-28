import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeDimension } from "./attributedimension";
import { SegmentBehaviors } from "./segmentbehaviors";
import { SegmentDemographics } from "./segmentdemographics";
import { SegmentLocation } from "./segmentlocation";
import { MetricDimension } from "./metricdimension";



// SegmentDimensions
/** 
 * Specifies the dimension settings for a segment.
**/
export class SegmentDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeDimension })
  attributes?: Map<string, AttributeDimension>;

  @SpeakeasyMetadata({ data: "json, name=Behavior" })
  behavior?: SegmentBehaviors;

  @SpeakeasyMetadata({ data: "json, name=Demographic" })
  demographic?: SegmentDemographics;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: SegmentLocation;

  @SpeakeasyMetadata({ data: "json, name=Metrics", elemType: MetricDimension })
  metrics?: Map<string, MetricDimension>;

  @SpeakeasyMetadata({ data: "json, name=UserAttributes", elemType: AttributeDimension })
  userAttributes?: Map<string, AttributeDimension>;
}
