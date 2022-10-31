package shared



type OcrPageResultWithWordsWithLocation struct {
    PageNumber *int32 `json:"PageNumber,omitempty"`
    Successful *bool `json:"Successful,omitempty"`
    Words []OcrWordElement `json:"Words,omitempty"`
    
}

