package shared



type PasswordResetRequest struct {
    Password string `json:"password"`
    ResetToken string `json:"resetToken"`
    
}

