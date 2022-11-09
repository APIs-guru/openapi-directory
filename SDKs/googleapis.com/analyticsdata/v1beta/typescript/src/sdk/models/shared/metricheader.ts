import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MetricHeaderTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED"
,    TypeInteger = "TYPE_INTEGER"
,    TypeFloat = "TYPE_FLOAT"
,    TypeSeconds = "TYPE_SECONDS"
,    TypeMilliseconds = "TYPE_MILLISECONDS"
,    TypeMinutes = "TYPE_MINUTES"
,    TypeHours = "TYPE_HOURS"
,    TypeStandard = "TYPE_STANDARD"
,    TypeCurrency = "TYPE_CURRENCY"
,    TypeFeet = "TYPE_FEET"
,    TypeMiles = "TYPE_MILES"
,    TypeMeters = "TYPE_METERS"
,    TypeKilometers = "TYPE_KILOMETERS"
}


// MetricHeader
/** 
 * Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.
**/
export class MetricHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: MetricHeaderTypeEnum;
}
