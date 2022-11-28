package shared

// InsightResultValue
// The insight result values returned by the <code>GetInsightResults</code> operation.
type InsightResultValue struct {
	Count                 int64  `json:"Count"`
	GroupByAttributeValue string `json:"GroupByAttributeValue"`
}
