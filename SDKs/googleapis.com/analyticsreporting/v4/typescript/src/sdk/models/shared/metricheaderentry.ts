import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MetricHeaderEntryTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    Integer = "INTEGER",
    Float = "FLOAT",
    Currency = "CURRENCY",
    Percent = "PERCENT",
    Time = "TIME"
}


// MetricHeaderEntry
/** 
 * Header for the metrics.
**/
export class MetricHeaderEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MetricHeaderEntryTypeEnum;
}
