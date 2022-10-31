package shared

type SearchFacesRequest struct {
	CollectionID       string   `json:"CollectionId"`
	FaceID             string   `json:"FaceId"`
	FaceMatchThreshold *float32 `json:"FaceMatchThreshold,omitempty"`
	MaxFaces           *int64   `json:"MaxFaces,omitempty"`
}
