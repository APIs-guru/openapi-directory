package shared



type IndexFacesRequest struct {
    CollectionID string `json:"CollectionId"`
    DetectionAttributes []AttributeEnum `json:"DetectionAttributes,omitempty"`
    ExternalImageID *string `json:"ExternalImageId,omitempty"`
    Image Image `json:"Image"`
    MaxFaces *int64 `json:"MaxFaces,omitempty"`
    QualityFilter *QualityFilterEnum `json:"QualityFilter,omitempty"`
    
}

