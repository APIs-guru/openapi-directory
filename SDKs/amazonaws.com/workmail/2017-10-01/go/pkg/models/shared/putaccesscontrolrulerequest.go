package shared



type PutAccessControlRuleRequest struct {
    Actions []string `json:"Actions,omitempty"`
    Description string `json:"Description"`
    Effect AccessControlRuleEffectEnum `json:"Effect"`
    IPRanges []string `json:"IpRanges,omitempty"`
    Name string `json:"Name"`
    NotActions []string `json:"NotActions,omitempty"`
    NotIPRanges []string `json:"NotIpRanges,omitempty"`
    NotUserIds []string `json:"NotUserIds,omitempty"`
    OrganizationID string `json:"OrganizationId"`
    UserIds []string `json:"UserIds,omitempty"`
    
}

