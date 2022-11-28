import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorSummary } from "./anomalydetectorsummary";
export declare class ListAnomalyDetectorsResponse extends SpeakeasyBase {
    anomalyDetectorSummaryList?: AnomalyDetectorSummary[];
    nextToken?: string;
}
