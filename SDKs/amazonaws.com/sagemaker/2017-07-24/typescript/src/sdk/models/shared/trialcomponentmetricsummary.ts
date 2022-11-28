import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrialComponentMetricSummary
/** 
 * A summary of the metrics of a trial component.
**/
export class TrialComponentMetricSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Avg" })
  avg?: number;

  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Last" })
  last?: number;

  @SpeakeasyMetadata({ data: "json, name=Max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=Min" })
  min?: number;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StdDev" })
  stdDev?: number;

  @SpeakeasyMetadata({ data: "json, name=TimeStamp" })
  timeStamp?: Date;
}
