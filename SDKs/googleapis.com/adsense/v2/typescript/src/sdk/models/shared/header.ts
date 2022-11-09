import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HeaderTypeEnum {
    HeaderTypeUnspecified = "HEADER_TYPE_UNSPECIFIED"
,    Dimension = "DIMENSION"
,    MetricTally = "METRIC_TALLY"
,    MetricRatio = "METRIC_RATIO"
,    MetricCurrency = "METRIC_CURRENCY"
,    MetricMilliseconds = "METRIC_MILLISECONDS"
,    MetricDecimal = "METRIC_DECIMAL"
}


// Header
/** 
 * The header information of the columns requested in the report.
**/
export class Header extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: HeaderTypeEnum;
}
