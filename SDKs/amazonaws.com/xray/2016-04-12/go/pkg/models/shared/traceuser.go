package shared



type TraceUser struct {
    ServiceIds []ServiceID `json:"ServiceIds,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    
}

