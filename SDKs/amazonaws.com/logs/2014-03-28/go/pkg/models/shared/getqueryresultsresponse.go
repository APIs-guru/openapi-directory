package shared

type GetQueryResultsResponse struct {
	Results    [][]ResultField  `json:"results"`
	Statistics *QueryStatistics `json:"statistics"`
	Status     *QueryStatusEnum `json:"status"`
}
