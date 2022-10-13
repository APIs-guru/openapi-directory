package shared

type ListApplicationsRequest struct {
	Limit     *int64  `json:"Limit"`
	NextToken *string `json:"NextToken"`
}
