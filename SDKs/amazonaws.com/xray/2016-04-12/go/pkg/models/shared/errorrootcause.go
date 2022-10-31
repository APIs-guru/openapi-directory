package shared



type ErrorRootCause struct {
    ClientImpacting *bool `json:"ClientImpacting,omitempty"`
    Services []ErrorRootCauseService `json:"Services,omitempty"`
    
}

