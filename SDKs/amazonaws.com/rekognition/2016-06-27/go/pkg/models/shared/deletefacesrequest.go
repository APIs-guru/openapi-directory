package shared

type DeleteFacesRequest struct {
	CollectionID string   `json:"CollectionId"`
	FaceIds      []string `json:"FaceIds"`
}
