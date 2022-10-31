package shared



type ProfileSummary struct {
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    Starred *bool `json:"starred,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

