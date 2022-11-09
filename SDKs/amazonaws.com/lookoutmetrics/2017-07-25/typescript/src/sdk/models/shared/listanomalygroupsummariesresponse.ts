import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnomalyGroupStatistics } from "./anomalygroupstatistics";
import { AnomalyGroupSummary } from "./anomalygroupsummary";


export class ListAnomalyGroupSummariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyGroupStatistics" })
  anomalyGroupStatistics?: AnomalyGroupStatistics;

  @Metadata({ data: "json, name=AnomalyGroupSummaryList", elemType: shared.AnomalyGroupSummary })
  anomalyGroupSummaryList?: AnomalyGroupSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
