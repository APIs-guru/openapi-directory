package shared

type ListFacesResponse struct {
	FaceModelVersion *string `json:"FaceModelVersion,omitempty"`
	Faces            []Face  `json:"Faces,omitempty"`
	NextToken        *string `json:"NextToken,omitempty"`
}
