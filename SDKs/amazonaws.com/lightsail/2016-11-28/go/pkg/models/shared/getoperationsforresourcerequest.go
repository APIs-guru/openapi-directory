package shared



type GetOperationsForResourceRequest struct {
    PageToken *string `json:"pageToken,omitempty"`
    ResourceName string `json:"resourceName"`
    
}

