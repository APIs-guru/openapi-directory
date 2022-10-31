package shared



type GetQueryResultsResponse struct {
    Results [][]ResultField `json:"results,omitempty"`
    Statistics *QueryStatistics `json:"statistics,omitempty"`
    Status *QueryStatusEnum `json:"status,omitempty"`
    
}

