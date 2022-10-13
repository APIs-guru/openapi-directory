package shared

type ListQualificationTypesRequest struct {
	MaxResults          *int64  `json:"MaxResults"`
	MustBeOwnedByCaller *bool   `json:"MustBeOwnedByCaller"`
	MustBeRequestable   bool    `json:"MustBeRequestable"`
	NextToken           *string `json:"NextToken"`
	Query               *string `json:"Query"`
}
