package shared

type ListFacesRequest struct {
	CollectionID string  `json:"CollectionId"`
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
}
