import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
**/
export declare class InsightRuleMetricDatapoint extends SpeakeasyBase {
    average?: number;
    maxContributorValue?: number;
    maximum?: number;
    minimum?: number;
    sampleCount?: number;
    sum?: number;
    timestamp: Date;
    uniqueContributors?: number;
}
