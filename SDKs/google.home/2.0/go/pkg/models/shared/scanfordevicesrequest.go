package shared



type ScanfordevicesRequest struct {
    ClearResults bool `json:"clear_results"`
    Enable bool `json:"enable"`
    Timeout int32 `json:"timeout"`
    
}

