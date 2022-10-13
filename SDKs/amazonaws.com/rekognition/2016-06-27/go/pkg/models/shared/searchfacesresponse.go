package shared

type SearchFacesResponse struct {
	FaceMatches      []FaceMatch `json:"FaceMatches"`
	FaceModelVersion *string     `json:"FaceModelVersion"`
	SearchedFaceID   *string     `json:"SearchedFaceId"`
}
