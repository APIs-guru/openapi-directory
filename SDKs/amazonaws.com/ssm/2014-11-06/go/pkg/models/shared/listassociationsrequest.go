package shared

type ListAssociationsRequest struct {
	AssociationFilterList []AssociationFilter `json:"AssociationFilterList"`
	MaxResults            *int64              `json:"MaxResults"`
	NextToken             *string             `json:"NextToken"`
}
