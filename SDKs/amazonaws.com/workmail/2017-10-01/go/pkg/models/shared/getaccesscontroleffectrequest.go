package shared



type GetAccessControlEffectRequest struct {
    Action string `json:"Action"`
    IPAddress string `json:"IpAddress"`
    OrganizationID string `json:"OrganizationId"`
    UserID string `json:"UserId"`
    
}

