package shared



type GetLogsResponse struct {
    Data []Log `json:"data"`
    Links *Links `json:"links,omitempty"`
    Meta *Meta `json:"meta,omitempty"`
    Status string `json:"status"`
    StatusCode int64 `json:"status_code"`
    
}

