import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightRuleContributorDatapoint
/** 
 * <p>One data point related to one contributor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p>
**/
export class InsightRuleContributorDatapoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approximateValue: number;

  @SpeakeasyMetadata()
  timestamp: Date;
}
