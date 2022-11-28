import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MetricFormattingTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    Integer = "INTEGER",
    Float = "FLOAT",
    Currency = "CURRENCY",
    Percent = "PERCENT",
    Time = "TIME"
}


// Metric
/** 
 * [Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=formattingType" })
  formattingType?: MetricFormattingTypeEnum;
}
