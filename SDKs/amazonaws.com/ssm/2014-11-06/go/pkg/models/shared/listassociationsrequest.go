package shared

type ListAssociationsRequest struct {
	AssociationFilterList []AssociationFilter `json:"AssociationFilterList,omitempty"`
	MaxResults            *int64              `json:"MaxResults,omitempty"`
	NextToken             *string             `json:"NextToken,omitempty"`
}
