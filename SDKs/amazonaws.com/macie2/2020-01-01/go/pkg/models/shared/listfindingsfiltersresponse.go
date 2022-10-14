package shared

type ListFindingsFiltersResponse struct {
	FindingsFilterListItems []FindingsFilterListItem `json:"findingsFilterListItems,omitempty"`
	NextToken               *string                  `json:"nextToken,omitempty"`
}
