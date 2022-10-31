package shared



type PasswordPolicyViolationResponse struct {
    Code int32 `json:"code"`
    DebugInfo *string `json:"debugInfo,omitempty"`
    ErrorCode *int32 `json:"errorCode,omitempty"`
    Message string `json:"message"`
    ViolatedPasswordPolicies []ViolatedPasswordPolicy `json:"violatedPasswordPolicies,omitempty"`
    
}

