package shared



type OcrPhotoTextElement struct {
    BoundingPoints []Point `json:"BoundingPoints,omitempty"`
    ConfidenceLevel *float64 `json:"ConfidenceLevel,omitempty"`
    Height *int32 `json:"Height,omitempty"`
    Text *string `json:"Text,omitempty"`
    Width *int32 `json:"Width,omitempty"`
    XLeft *int32 `json:"XLeft,omitempty"`
    YTop *int32 `json:"YTop,omitempty"`
    
}

