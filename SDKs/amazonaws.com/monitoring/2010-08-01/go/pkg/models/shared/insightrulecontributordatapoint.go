package shared

import (
	"time"
)

// InsightRuleContributorDatapoint
// <p>One data point related to one contributor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p>
type InsightRuleContributorDatapoint struct {
	ApproximateValue float64
	Timestamp        time.Time
}
