package shared



type BatchPermissionsFailureEntry struct {
    Error *ErrorDetail `json:"Error,omitempty"`
    RequestEntry *BatchPermissionsRequestEntry `json:"RequestEntry,omitempty"`
    
}

