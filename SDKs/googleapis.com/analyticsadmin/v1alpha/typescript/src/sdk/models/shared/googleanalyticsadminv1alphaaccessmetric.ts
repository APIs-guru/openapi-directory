import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaAccessMetric
/** 
 * The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records.
**/
export class GoogleAnalyticsAdminV1alphaAccessMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricName" })
  metricName?: string;
}
