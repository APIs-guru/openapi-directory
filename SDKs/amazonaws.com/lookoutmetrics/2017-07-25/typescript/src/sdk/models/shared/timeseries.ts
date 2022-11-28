import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionNameValue } from "./dimensionnamevalue";



// TimeSeries
/** 
 * Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region.
**/
export class TimeSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DimensionList", elemType: DimensionNameValue })
  dimensionList: DimensionNameValue[];

  @SpeakeasyMetadata({ data: "json, name=MetricValueList" })
  metricValueList: number[];

  @SpeakeasyMetadata({ data: "json, name=TimeSeriesId" })
  timeSeriesId: string;
}
