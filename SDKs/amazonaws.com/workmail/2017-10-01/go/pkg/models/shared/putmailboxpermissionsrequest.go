package shared



type PutMailboxPermissionsRequest struct {
    EntityID string `json:"EntityId"`
    GranteeID string `json:"GranteeId"`
    OrganizationID string `json:"OrganizationId"`
    PermissionValues []PermissionTypeEnum `json:"PermissionValues"`
    
}

