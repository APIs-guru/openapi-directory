package shared

type GetStatisticsResponseMonthwiseRegistationsDetails2 struct {
	Count *int64 `json:"count"`
	ID    *int64 `json:"id"`
	Month *int64 `json:"month"`
	Year  *int64 `json:"year"`
}

type GetStatisticsResponseMonthwiseRegistations struct {
	Count    *int64                                              `json:"count"`
	Details2 *GetStatisticsResponseMonthwiseRegistationsDetails2 `json:"details2"`
	ID       *int64                                              `json:"id"`
	Month    *int64                                              `json:"month"`
	Year     *int64                                              `json:"year"`
}

type GetStatisticsResponseYearwiseAuthenticDocumentsDetails struct {
	Count *int64 `json:"count"`
	ID    *int64 `json:"id"`
	Year  *int64 `json:"year"`
}

type GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 struct {
	Count *int64 `json:"count"`
	ID    *int64 `json:"id"`
	Year  *int64 `json:"year"`
}

type GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 struct {
	Count *int64 `json:"count"`
	ID    *int64 `json:"id"`
	Year  *int64 `json:"year"`
}

type GetStatisticsResponseYearwiseAuthenticDocuments struct {
	Count    *int64                                                   `json:"count"`
	Details  *GetStatisticsResponseYearwiseAuthenticDocumentsDetails  `json:"details"`
	Details1 *GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 `json:"details1"`
	Details2 *GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 `json:"details2"`
	ID       *int64                                                   `json:"id"`
	Year     *int64                                                   `json:"year"`
}

type GetStatisticsResponse struct {
	AuthenticDocuments         string                                          `json:"authentic_documents"`
	CountAsOn                  string                                          `json:"count_as_on"`
	Issuers                    string                                          `json:"issuers"`
	MonthwiseRegistations      GetStatisticsResponseMonthwiseRegistations      `json:"monthwise_registations"`
	Requestors                 string                                          `json:"requestors"`
	Users                      string                                          `json:"users"`
	YearwiseAuthenticDocuments GetStatisticsResponseYearwiseAuthenticDocuments `json:"yearwise_authentic_documents"`
}
