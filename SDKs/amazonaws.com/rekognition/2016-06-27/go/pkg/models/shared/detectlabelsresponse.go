package shared

type DetectLabelsResponse struct {
	LabelModelVersion     *string                    `json:"LabelModelVersion"`
	Labels                []Label                    `json:"Labels"`
	OrientationCorrection *OrientationCorrectionEnum `json:"OrientationCorrection"`
}
