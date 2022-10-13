package shared

type CompareFacesResponse struct {
	FaceMatches                      []CompareFacesMatch        `json:"FaceMatches"`
	SourceImageFace                  *ComparedSourceImageFace   `json:"SourceImageFace"`
	SourceImageOrientationCorrection *OrientationCorrectionEnum `json:"SourceImageOrientationCorrection"`
	TargetImageOrientationCorrection *OrientationCorrectionEnum `json:"TargetImageOrientationCorrection"`
	UnmatchedFaces                   []ComparedFace             `json:"UnmatchedFaces"`
}
