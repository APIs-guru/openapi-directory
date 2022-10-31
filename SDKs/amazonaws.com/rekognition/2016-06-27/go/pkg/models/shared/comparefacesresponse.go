package shared



type CompareFacesResponse struct {
    FaceMatches []CompareFacesMatch `json:"FaceMatches,omitempty"`
    SourceImageFace *ComparedSourceImageFace `json:"SourceImageFace,omitempty"`
    SourceImageOrientationCorrection *OrientationCorrectionEnum `json:"SourceImageOrientationCorrection,omitempty"`
    TargetImageOrientationCorrection *OrientationCorrectionEnum `json:"TargetImageOrientationCorrection,omitempty"`
    UnmatchedFaces []ComparedFace `json:"UnmatchedFaces,omitempty"`
    
}

