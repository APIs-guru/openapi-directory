package shared

type SearchFacesResponse struct {
	FaceMatches      []FaceMatch `json:"FaceMatches,omitempty"`
	FaceModelVersion *string     `json:"FaceModelVersion,omitempty"`
	SearchedFaceID   *string     `json:"SearchedFaceId,omitempty"`
}
