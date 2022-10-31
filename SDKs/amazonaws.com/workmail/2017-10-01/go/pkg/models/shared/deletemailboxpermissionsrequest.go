package shared



type DeleteMailboxPermissionsRequest struct {
    EntityID string `json:"EntityId"`
    GranteeID string `json:"GranteeId"`
    OrganizationID string `json:"OrganizationId"`
    
}

