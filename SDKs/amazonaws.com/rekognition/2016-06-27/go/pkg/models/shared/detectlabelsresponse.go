package shared



type DetectLabelsResponse struct {
    LabelModelVersion *string `json:"LabelModelVersion,omitempty"`
    Labels []Label `json:"Labels,omitempty"`
    OrientationCorrection *OrientationCorrectionEnum `json:"OrientationCorrection,omitempty"`
    
}

