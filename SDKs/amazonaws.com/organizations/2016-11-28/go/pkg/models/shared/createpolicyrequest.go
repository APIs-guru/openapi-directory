package shared



type CreatePolicyRequest struct {
    Content string `json:"Content"`
    Description string `json:"Description"`
    Name string `json:"Name"`
    Tags []Tag `json:"Tags,omitempty"`
    Type PolicyTypeEnum `json:"Type"`
    
}

