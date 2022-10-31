package shared



type GetBlacklistReportsResponse struct {
    BlacklistReport map[string][]BlacklistEntry `json:"BlacklistReport"`
    
}

