package shared

type DetectFacesResponse struct {
	FaceDetails           []FaceDetail               `json:"FaceDetails"`
	OrientationCorrection *OrientationCorrectionEnum `json:"OrientationCorrection"`
}
