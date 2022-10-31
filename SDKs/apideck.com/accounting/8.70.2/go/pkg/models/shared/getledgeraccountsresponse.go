package shared



type GetLedgerAccountsResponse struct {
    Data []map[string]interface{} `json:"data"`
    Links *Links `json:"links,omitempty"`
    Meta *Meta `json:"meta,omitempty"`
    Operation string `json:"operation"`
    Resource string `json:"resource"`
    Service string `json:"service"`
    Status string `json:"status"`
    StatusCode int64 `json:"status_code"`
    
}

