package shared

// SearchResourcesCriteriaBlock
// Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.
type SearchResourcesCriteriaBlock struct {
	And []SearchResourcesCriteria `json:"and,omitempty"`
}
