package shared

type ListCollectionsResponse struct {
	CollectionIds     []string `json:"CollectionIds"`
	FaceModelVersions []string `json:"FaceModelVersions"`
	NextToken         *string  `json:"NextToken"`
}
