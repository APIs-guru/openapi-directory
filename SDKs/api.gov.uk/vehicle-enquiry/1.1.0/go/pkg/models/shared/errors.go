package shared



type Errors struct {
    Code *string `json:"code,omitempty"`
    Detail *string `json:"detail,omitempty"`
    Status *string `json:"status,omitempty"`
    Title string `json:"title"`
    
}

