package shared



type Classification struct {
    AdvisoryText *string `json:"advisoryText,omitempty"`
    Code string `json:"code"`
    Images map[string]string `json:"images"`
    Level int32 `json:"level"`
    Name string `json:"name"`
    System string `json:"system"`
    
}

