package shared



type CreateResourceRequest struct {
    Name string `json:"Name"`
    OrganizationID string `json:"OrganizationId"`
    Type ResourceTypeEnum `json:"Type"`
    
}

