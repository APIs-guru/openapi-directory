import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a dataset.
**/
export declare class MetricSetSummary extends SpeakeasyBase {
    anomalyDetectorArn?: string;
    creationTime?: Date;
    lastModificationTime?: Date;
    metricSetArn?: string;
    metricSetDescription?: string;
    metricSetName?: string;
    tags?: Map<string, string>;
}
