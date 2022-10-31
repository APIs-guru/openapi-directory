package shared



type MissingKeysResponse struct {
    Files []FileFileKeys `json:"files,omitempty"`
    Items []UserIDFileIDItem `json:"items,omitempty"`
    Range *Range `json:"range,omitempty"`
    Users []UserUserPublicKey `json:"users,omitempty"`
    
}

