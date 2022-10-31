package shared



type ListGcpUserAccessBindingsResponse struct {
    GcpUserAccessBindings []GcpUserAccessBinding `json:"gcpUserAccessBindings,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

