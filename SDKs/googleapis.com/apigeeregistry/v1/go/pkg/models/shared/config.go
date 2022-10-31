package shared



type Config struct {
    CmekKeyName *string `json:"cmekKeyName,omitempty"`
    Location *string `json:"location,omitempty"`
    
}

