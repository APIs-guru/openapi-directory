package shared



type OpsEntity struct {
    Data map[string]OpsEntityItem `json:"Data,omitempty"`
    ID *string `json:"Id,omitempty"`
    
}

