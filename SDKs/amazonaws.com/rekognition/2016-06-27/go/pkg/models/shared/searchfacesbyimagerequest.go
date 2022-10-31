package shared



type SearchFacesByImageRequest struct {
    CollectionID string `json:"CollectionId"`
    FaceMatchThreshold *float32 `json:"FaceMatchThreshold,omitempty"`
    Image Image `json:"Image"`
    MaxFaces *int64 `json:"MaxFaces,omitempty"`
    QualityFilter *QualityFilterEnum `json:"QualityFilter,omitempty"`
    
}

