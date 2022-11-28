import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>One data point related to one contributor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p>
**/
export declare class InsightRuleContributorDatapoint extends SpeakeasyBase {
    approximateValue: number;
    timestamp: Date;
}
