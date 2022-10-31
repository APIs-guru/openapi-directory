package shared



type Triplet struct {
    Device *string `json:"device,omitempty"`
    Mib *string `json:"mib,omitempty"`
    Scenario *int32 `json:"scenario,omitempty"`
    
}

