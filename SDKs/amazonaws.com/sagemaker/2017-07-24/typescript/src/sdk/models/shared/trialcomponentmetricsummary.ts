import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrialComponentMetricSummary
/** 
 * A summary of the metrics of a trial component.
**/
export class TrialComponentMetricSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Avg" })
  avg?: number;

  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Last" })
  last?: number;

  @Metadata({ data: "json, name=Max" })
  max?: number;

  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=Min" })
  min?: number;

  @Metadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @Metadata({ data: "json, name=StdDev" })
  stdDev?: number;

  @Metadata({ data: "json, name=TimeStamp" })
  timeStamp?: Date;
}
