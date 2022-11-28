package shared

import (
	"time"
)

// InsightRuleMetricDatapoint
// <p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
type InsightRuleMetricDatapoint struct {
	Average             *float64
	MaxContributorValue *float64
	Maximum             *float64
	Minimum             *float64
	SampleCount         *float64
	Sum                 *float64
	Timestamp           time.Time
	UniqueContributors  *float64
}
