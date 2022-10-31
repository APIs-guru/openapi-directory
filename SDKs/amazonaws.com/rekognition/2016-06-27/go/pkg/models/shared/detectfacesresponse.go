package shared



type DetectFacesResponse struct {
    FaceDetails []FaceDetail `json:"FaceDetails,omitempty"`
    OrientationCorrection *OrientationCorrectionEnum `json:"OrientationCorrection,omitempty"`
    
}

