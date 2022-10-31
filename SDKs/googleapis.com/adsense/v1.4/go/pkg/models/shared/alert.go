package shared



type Alert struct {
    ID *string `json:"id,omitempty"`
    IsDismissible *bool `json:"isDismissible,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Message *string `json:"message,omitempty"`
    Severity *string `json:"severity,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

