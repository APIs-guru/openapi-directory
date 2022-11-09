import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContributionMatrix } from "./contributionmatrix";


// MetricLevelImpact
/** 
 * Details about a measure affected by an anomaly.
**/
export class MetricLevelImpact extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContributionMatrix" })
  contributionMatrix?: ContributionMatrix;

  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=NumTimeSeries" })
  numTimeSeries?: number;
}
