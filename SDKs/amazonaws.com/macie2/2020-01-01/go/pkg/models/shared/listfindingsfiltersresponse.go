package shared

type ListFindingsFiltersResponse struct {
	FindingsFilterListItems []FindingsFilterListItem `json:"findingsFilterListItems"`
	NextToken               *string                  `json:"nextToken"`
}
