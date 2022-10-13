package shared

type ListFacesResponse struct {
	FaceModelVersion *string `json:"FaceModelVersion"`
	Faces            []Face  `json:"Faces"`
	NextToken        *string `json:"NextToken"`
}
