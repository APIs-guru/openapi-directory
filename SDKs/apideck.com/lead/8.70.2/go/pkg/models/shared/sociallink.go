package shared



type SocialLink struct {
    ID *string `json:"id,omitempty"`
    Type *string `json:"type,omitempty"`
    URL string `json:"url"`
    
}

