package shared



type CompareFacesRequest struct {
    QualityFilter *QualityFilterEnum `json:"QualityFilter,omitempty"`
    SimilarityThreshold *float32 `json:"SimilarityThreshold,omitempty"`
    SourceImage Image `json:"SourceImage"`
    TargetImage Image `json:"TargetImage"`
    
}

