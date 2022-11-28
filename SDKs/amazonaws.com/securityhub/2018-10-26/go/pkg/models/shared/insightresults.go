package shared

// InsightResults
// The insight results returned by the <code>GetInsightResults</code> operation.
type InsightResults struct {
	GroupByAttribute string               `json:"GroupByAttribute"`
	InsightArn       string               `json:"InsightArn"`
	ResultValues     []InsightResultValue `json:"ResultValues"`
}
