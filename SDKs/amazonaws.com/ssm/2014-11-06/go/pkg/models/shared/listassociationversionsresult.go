package shared

type ListAssociationVersionsResult struct {
	AssociationVersions []AssociationVersionInfo `json:"AssociationVersions"`
	NextToken           *string                  `json:"NextToken"`
}
