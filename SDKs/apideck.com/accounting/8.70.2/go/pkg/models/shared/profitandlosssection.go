package shared



type ProfitAndLossSection struct {
    ID *string `json:"id,omitempty"`
    Records []interface{} `json:"records,omitempty"`
    Title *string `json:"title,omitempty"`
    Total *float64 `json:"total,omitempty"`
    Type string `json:"type"`
    
}

