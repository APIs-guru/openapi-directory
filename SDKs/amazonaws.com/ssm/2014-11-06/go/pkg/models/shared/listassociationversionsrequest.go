package shared

type ListAssociationVersionsRequest struct {
	AssociationID string  `json:"AssociationId"`
	MaxResults    *int64  `json:"MaxResults"`
	NextToken     *string `json:"NextToken"`
}
