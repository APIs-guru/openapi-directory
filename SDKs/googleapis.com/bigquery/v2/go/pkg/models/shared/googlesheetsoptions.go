package shared



type GoogleSheetsOptions struct {
    Range *string `json:"range,omitempty"`
    SkipLeadingRows *string `json:"skipLeadingRows,omitempty"`
    
}

