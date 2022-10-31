package shared



type GetSampleDataResponse struct {
    HeaderValues []string `json:"HeaderValues,omitempty"`
    SampleRows [][]string `json:"SampleRows,omitempty"`
    
}

