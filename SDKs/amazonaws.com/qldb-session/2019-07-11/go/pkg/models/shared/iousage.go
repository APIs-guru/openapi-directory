package shared



type IoUsage struct {
    ReadIOs *int64 `json:"ReadIOs,omitempty"`
    WriteIOs *int64 `json:"WriteIOs,omitempty"`
    
}

