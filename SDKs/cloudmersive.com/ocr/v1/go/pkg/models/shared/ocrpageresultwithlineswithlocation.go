package shared



type OcrPageResultWithLinesWithLocation struct {
    Lines []OcrLineElement `json:"Lines,omitempty"`
    PageNumber *int32 `json:"PageNumber,omitempty"`
    Successful *bool `json:"Successful,omitempty"`
    
}

