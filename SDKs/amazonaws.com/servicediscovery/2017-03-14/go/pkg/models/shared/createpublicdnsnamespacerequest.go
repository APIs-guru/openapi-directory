package shared



type CreatePublicDNSNamespaceRequest struct {
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    Description *string `json:"Description,omitempty"`
    Name string `json:"Name"`
    Properties *PublicDNSNamespaceProperties `json:"Properties,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

