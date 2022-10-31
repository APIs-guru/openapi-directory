package shared



type Target struct {
    ID *string `json:"Id,omitempty"`
    Type TargetTypeEnum `json:"Type"`
    
}

