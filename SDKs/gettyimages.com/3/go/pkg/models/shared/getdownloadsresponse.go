package shared



type GetDownloadsResponse struct {
    Downloads []HistoricalDownload `json:"downloads,omitempty"`
    ResultCount *int32 `json:"result_count,omitempty"`
    
}

