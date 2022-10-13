package shared

type CompareFacesRequest struct {
	QualityFilter       *QualityFilterEnum `json:"QualityFilter"`
	SimilarityThreshold *float32           `json:"SimilarityThreshold"`
	SourceImage         Image              `json:"SourceImage"`
	TargetImage         Image              `json:"TargetImage"`
}
