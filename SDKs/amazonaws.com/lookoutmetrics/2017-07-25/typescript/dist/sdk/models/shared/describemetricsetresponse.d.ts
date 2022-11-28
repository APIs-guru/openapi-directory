import { SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
import { FrequencyEnum } from "./frequencyenum";
import { MetricSource } from "./metricsource";
import { TimestampColumn } from "./timestampcolumn";
export declare class DescribeMetricSetResponse extends SpeakeasyBase {
    anomalyDetectorArn?: string;
    creationTime?: Date;
    dimensionList?: string[];
    lastModificationTime?: Date;
    metricList?: Metric[];
    metricSetArn?: string;
    metricSetDescription?: string;
    metricSetFrequency?: FrequencyEnum;
    metricSetName?: string;
    metricSource?: MetricSource;
    offset?: number;
    timestampColumn?: TimestampColumn;
    timezone?: string;
}
