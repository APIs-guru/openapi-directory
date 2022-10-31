package shared



type GetEcosystemResponse struct {
    Data Ecosystem `json:"data"`
    Status string `json:"status"`
    StatusCode int64 `json:"status_code"`
    
}

