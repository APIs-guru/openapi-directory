package shared

type ListCandidatesForAutoMlJobRequest struct {
	AutoMlJobName       string               `json:"AutoMLJobName"`
	CandidateNameEquals *string              `json:"CandidateNameEquals"`
	MaxResults          *int64               `json:"MaxResults"`
	NextToken           *string              `json:"NextToken"`
	SortBy              *CandidateSortByEnum `json:"SortBy"`
	SortOrder           *AutoMlSortOrderEnum `json:"SortOrder"`
	StatusEquals        *CandidateStatusEnum `json:"StatusEquals"`
}
