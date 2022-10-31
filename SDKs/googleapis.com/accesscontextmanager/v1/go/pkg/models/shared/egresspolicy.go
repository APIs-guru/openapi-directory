package shared



type EgressPolicy struct {
    EgressFrom *EgressFrom `json:"egressFrom,omitempty"`
    EgressTo *EgressTo `json:"egressTo,omitempty"`
    
}

