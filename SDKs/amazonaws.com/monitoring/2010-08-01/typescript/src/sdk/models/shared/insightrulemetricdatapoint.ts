import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightRuleMetricDatapoint
/** 
 * <p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
**/
export class InsightRuleMetricDatapoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  average?: number;

  @SpeakeasyMetadata()
  maxContributorValue?: number;

  @SpeakeasyMetadata()
  maximum?: number;

  @SpeakeasyMetadata()
  minimum?: number;

  @SpeakeasyMetadata()
  sampleCount?: number;

  @SpeakeasyMetadata()
  sum?: number;

  @SpeakeasyMetadata()
  timestamp: Date;

  @SpeakeasyMetadata()
  uniqueContributors?: number;
}
