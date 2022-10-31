package shared



type CreatePrivateDNSNamespaceRequest struct {
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    Description *string `json:"Description,omitempty"`
    Name string `json:"Name"`
    Properties *PrivateDNSNamespaceProperties `json:"Properties,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Vpc string `json:"Vpc"`
    
}

