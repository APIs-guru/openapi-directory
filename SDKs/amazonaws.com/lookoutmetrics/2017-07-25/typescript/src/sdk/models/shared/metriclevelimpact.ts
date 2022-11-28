import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContributionMatrix } from "./contributionmatrix";



// MetricLevelImpact
/** 
 * Details about a measure affected by an anomaly.
**/
export class MetricLevelImpact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContributionMatrix" })
  contributionMatrix?: ContributionMatrix;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=NumTimeSeries" })
  numTimeSeries?: number;
}
