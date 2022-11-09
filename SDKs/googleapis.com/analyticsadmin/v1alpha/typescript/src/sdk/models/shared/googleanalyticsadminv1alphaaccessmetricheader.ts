import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaAccessMetricHeader
/** 
 * Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.
**/
export class GoogleAnalyticsAdminV1alphaAccessMetricHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricName" })
  metricName?: string;
}
