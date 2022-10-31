package shared



type EnablePolicyTypeRequest struct {
    PolicyType PolicyTypeEnum `json:"PolicyType"`
    RootID string `json:"RootId"`
    
}

