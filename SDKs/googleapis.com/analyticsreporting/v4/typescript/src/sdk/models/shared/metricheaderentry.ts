import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MetricHeaderEntryTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED"
,    Integer = "INTEGER"
,    Float = "FLOAT"
,    Currency = "CURRENCY"
,    Percent = "PERCENT"
,    Time = "TIME"
}


// MetricHeaderEntry
/** 
 * Header for the metrics.
**/
export class MetricHeaderEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: MetricHeaderEntryTypeEnum;
}
