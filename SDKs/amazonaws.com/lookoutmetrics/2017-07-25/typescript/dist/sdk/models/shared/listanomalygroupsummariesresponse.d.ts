import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AnomalyGroupStatistics } from "./anomalygroupstatistics";
import { AnomalyGroupSummary } from "./anomalygroupsummary";
export declare class ListAnomalyGroupSummariesResponse extends SpeakeasyBase {
    anomalyGroupStatistics?: AnomalyGroupStatistics;
    anomalyGroupSummaryList?: AnomalyGroupSummary[];
    nextToken?: string;
}
