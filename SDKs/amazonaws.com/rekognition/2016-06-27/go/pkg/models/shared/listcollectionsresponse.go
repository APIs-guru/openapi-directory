package shared

type ListCollectionsResponse struct {
	CollectionIds     []string `json:"CollectionIds,omitempty"`
	FaceModelVersions []string `json:"FaceModelVersions,omitempty"`
	NextToken         *string  `json:"NextToken,omitempty"`
}
