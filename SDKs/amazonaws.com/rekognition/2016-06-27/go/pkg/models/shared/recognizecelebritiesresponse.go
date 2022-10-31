package shared



type RecognizeCelebritiesResponse struct {
    CelebrityFaces []Celebrity `json:"CelebrityFaces,omitempty"`
    OrientationCorrection *OrientationCorrectionEnum `json:"OrientationCorrection,omitempty"`
    UnrecognizedFaces []ComparedFace `json:"UnrecognizedFaces,omitempty"`
    
}

