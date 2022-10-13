package shared

type ListAssociationsResponse struct {
	AssociationSummaries []AssociationSummary `json:"AssociationSummaries"`
	NextToken            *string              `json:"NextToken"`
}
