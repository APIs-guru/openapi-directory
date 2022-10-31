package shared



type BatchRevokePermissionsResponse struct {
    Failures []BatchPermissionsFailureEntry `json:"Failures,omitempty"`
    
}

