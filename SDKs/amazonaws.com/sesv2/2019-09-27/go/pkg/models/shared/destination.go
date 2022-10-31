package shared



type Destination struct {
    BccAddresses []string `json:"BccAddresses,omitempty"`
    CcAddresses []string `json:"CcAddresses,omitempty"`
    ToAddresses []string `json:"ToAddresses,omitempty"`
    
}

