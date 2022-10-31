package shared



type DeleteAliasRequest struct {
    Alias string `json:"Alias"`
    EntityID string `json:"EntityId"`
    OrganizationID string `json:"OrganizationId"`
    
}

