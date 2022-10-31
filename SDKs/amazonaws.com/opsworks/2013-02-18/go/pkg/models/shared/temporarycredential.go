package shared



type TemporaryCredential struct {
    InstanceID *string `json:"InstanceId,omitempty"`
    Password *string `json:"Password,omitempty"`
    Username *string `json:"Username,omitempty"`
    ValidForInMinutes *int64 `json:"ValidForInMinutes,omitempty"`
    
}

