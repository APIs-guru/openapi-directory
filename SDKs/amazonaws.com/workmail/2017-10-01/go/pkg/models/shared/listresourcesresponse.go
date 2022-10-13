package shared

type ListResourcesResponse struct {
	NextToken *string    `json:"NextToken"`
	Resources []Resource `json:"Resources"`
}
