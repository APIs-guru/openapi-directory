package shared



type Face struct {
    BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
    Confidence *float32 `json:"Confidence,omitempty"`
    ExternalImageID *string `json:"ExternalImageId,omitempty"`
    FaceID *string `json:"FaceId,omitempty"`
    ImageID *string `json:"ImageId,omitempty"`
    
}

