package shared



type ValidationErrorsEntry struct {
    CheckName *string `json:"CheckName,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    
}

