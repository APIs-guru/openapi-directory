package shared



type Error struct {
    Detail *string `json:"detail,omitempty"`
    ErrorCode *int32 `json:"error_code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

