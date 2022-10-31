package shared



type DisablePolicyTypeRequest struct {
    PolicyType PolicyTypeEnum `json:"PolicyType"`
    RootID string `json:"RootId"`
    
}

