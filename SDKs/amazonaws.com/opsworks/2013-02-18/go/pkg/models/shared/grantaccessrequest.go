package shared



type GrantAccessRequest struct {
    InstanceID string `json:"InstanceId"`
    ValidForInMinutes *int64 `json:"ValidForInMinutes,omitempty"`
    
}

