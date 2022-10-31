package shared



type Permission struct {
    GranteeID string `json:"GranteeId"`
    GranteeType MemberTypeEnum `json:"GranteeType"`
    PermissionValues []PermissionTypeEnum `json:"PermissionValues"`
    
}

