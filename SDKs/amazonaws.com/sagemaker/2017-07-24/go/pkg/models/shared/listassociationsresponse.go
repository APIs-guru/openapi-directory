package shared

type ListAssociationsResponse struct {
	AssociationSummaries []AssociationSummary `json:"AssociationSummaries,omitempty"`
	NextToken            *string              `json:"NextToken,omitempty"`
}
