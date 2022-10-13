package shared

type GetDownloadsResponse struct {
	Downloads   []HistoricalDownload `json:"downloads"`
	ResultCount *int32               `json:"result_count"`
}
