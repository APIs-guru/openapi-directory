import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyGroupStatistics } from "./anomalygroupstatistics";
import { AnomalyGroupSummary } from "./anomalygroupsummary";



export class ListAnomalyGroupSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupStatistics" })
  anomalyGroupStatistics?: AnomalyGroupStatistics;

  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupSummaryList", elemType: AnomalyGroupSummary })
  anomalyGroupSummaryList?: AnomalyGroupSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
