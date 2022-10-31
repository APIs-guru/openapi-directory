package shared



type BatchCreatePrintersResponse struct {
    Failures []FailureInfo `json:"failures,omitempty"`
    Printers []Printer `json:"printers,omitempty"`
    
}

