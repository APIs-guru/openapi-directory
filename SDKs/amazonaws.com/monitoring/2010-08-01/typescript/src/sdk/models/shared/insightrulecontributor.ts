import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightRuleContributorDatapoint } from "./insightrulecontributordatapoint";



// InsightRuleContributor
/** 
 * <p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then a unique contributor is a unique combination of values from all the keys in the rule.</p> <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
**/
export class InsightRuleContributor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approximateAggregateValue: number;

  @SpeakeasyMetadata({ elemType: InsightRuleContributorDatapoint })
  datapoints: InsightRuleContributorDatapoint[];

  @SpeakeasyMetadata()
  keys: string[];
}
