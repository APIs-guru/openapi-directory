import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionNameValue } from "./dimensionnamevalue";
/**
 * Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region.
**/
export declare class TimeSeries extends SpeakeasyBase {
    dimensionList: DimensionNameValue[];
    metricValueList: number[];
    timeSeriesId: string;
}
