package shared



type ResponseTimeRootCause struct {
    ClientImpacting *bool `json:"ClientImpacting,omitempty"`
    Services []ResponseTimeRootCauseService `json:"Services,omitempty"`
    
}

