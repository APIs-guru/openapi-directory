import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeDimension } from "./attributedimension";
import { SegmentBehaviors } from "./segmentbehaviors";
import { SegmentDemographics } from "./segmentdemographics";
import { SegmentLocation } from "./segmentlocation";
import { MetricDimension } from "./metricdimension";
import { AttributeDimension } from "./attributedimension";


// SegmentDimensions
/** 
 * Specifies the dimension settings for a segment.
**/
export class SegmentDimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeDimension })
  attributes?: Map<string, AttributeDimension>;

  @Metadata({ data: "json, name=Behavior" })
  behavior?: SegmentBehaviors;

  @Metadata({ data: "json, name=Demographic" })
  demographic?: SegmentDemographics;

  @Metadata({ data: "json, name=Location" })
  location?: SegmentLocation;

  @Metadata({ data: "json, name=Metrics", elemType: shared.MetricDimension })
  metrics?: Map<string, MetricDimension>;

  @Metadata({ data: "json, name=UserAttributes", elemType: shared.AttributeDimension })
  userAttributes?: Map<string, AttributeDimension>;
}
