package shared



type SslSubjectAltName struct {
    Type *SslSubjectAltNameTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

