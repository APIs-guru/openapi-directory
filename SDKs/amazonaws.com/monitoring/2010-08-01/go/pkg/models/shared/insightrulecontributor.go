package shared

// InsightRuleContributor
// <p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then a unique contributor is a unique combination of values from all the keys in the rule.</p> <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
type InsightRuleContributor struct {
	ApproximateAggregateValue float64
	Datapoints                []InsightRuleContributorDatapoint
	Keys                      []string
}
