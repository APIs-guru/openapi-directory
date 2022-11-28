import { SpeakeasyBase } from "../../../internal/utils";
import { InsightRuleContributor } from "./insightrulecontributor";
import { InsightRuleMetricDatapoint } from "./insightrulemetricdatapoint";
export declare class GetInsightRuleReportOutput extends SpeakeasyBase {
    aggregateValue?: number;
    aggregationStatistic?: string;
    approximateUniqueCount?: number;
    contributors?: InsightRuleContributor[];
    keyLabels?: string[];
    metricDatapoints?: InsightRuleMetricDatapoint[];
}
