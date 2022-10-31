package shared



type VerificationCode struct {
    Etag *string `json:"etag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    UserID *string `json:"userId,omitempty"`
    VerificationCode *string `json:"verificationCode,omitempty"`
    
}

