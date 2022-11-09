import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionNameValue } from "./dimensionnamevalue";


// TimeSeries
/** 
 * Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region.
**/
export class TimeSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=DimensionList", elemType: shared.DimensionNameValue })
  dimensionList: DimensionNameValue[];

  @Metadata({ data: "json, name=MetricValueList" })
  metricValueList: number[];

  @Metadata({ data: "json, name=TimeSeriesId" })
  timeSeriesId: string;
}
