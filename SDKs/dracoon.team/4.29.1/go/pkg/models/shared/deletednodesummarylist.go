package shared

// DeletedNodeSummaryList
// List of deleted nodes
type DeletedNodeSummaryList struct {
	Items []DeletedNodeSummary `json:"items"`
	Range Range                `json:"range"`
}
