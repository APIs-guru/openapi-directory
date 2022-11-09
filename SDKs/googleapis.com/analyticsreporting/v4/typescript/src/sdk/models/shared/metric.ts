import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MetricFormattingTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED"
,    Integer = "INTEGER"
,    Float = "FLOAT"
,    Currency = "CURRENCY"
,    Percent = "PERCENT"
,    Time = "TIME"
}


// Metric
/** 
 * [Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period.
**/
export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=formattingType" })
  formattingType?: MetricFormattingTypeEnum;
}
