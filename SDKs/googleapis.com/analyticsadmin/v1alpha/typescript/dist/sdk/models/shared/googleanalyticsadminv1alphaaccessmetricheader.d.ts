import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.
**/
export declare class GoogleAnalyticsAdminV1alphaAccessMetricHeader extends SpeakeasyBase {
    metricName?: string;
}
