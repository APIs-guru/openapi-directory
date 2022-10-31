package shared



type ValidationErrorMessage struct {
    ErrorCode *string `json:"error_code,omitempty"`
    ErrorText *string `json:"error_text,omitempty"`
    
}

