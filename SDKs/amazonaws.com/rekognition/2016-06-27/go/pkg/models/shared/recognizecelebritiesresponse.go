package shared

type RecognizeCelebritiesResponse struct {
	CelebrityFaces        []Celebrity                `json:"CelebrityFaces"`
	OrientationCorrection *OrientationCorrectionEnum `json:"OrientationCorrection"`
	UnrecognizedFaces     []ComparedFace             `json:"UnrecognizedFaces"`
}
