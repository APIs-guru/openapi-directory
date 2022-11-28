package shared

type GetStatisticsResponseMonthwiseRegistationsDetails2 struct {
	Count *int64 `json:"count,omitempty"`
	ID    *int64 `json:"id,omitempty"`
	Month *int64 `json:"month,omitempty"`
	Year  *int64 `json:"year,omitempty"`
}

// GetStatisticsResponseMonthwiseRegistations
// List of last 12 months cumulative user registrations
type GetStatisticsResponseMonthwiseRegistations struct {
	Count    *int64                                              `json:"count,omitempty"`
	Details2 *GetStatisticsResponseMonthwiseRegistationsDetails2 `json:"details2,omitempty"`
	ID       *int64                                              `json:"id,omitempty"`
	Month    *int64                                              `json:"month,omitempty"`
	Year     *int64                                              `json:"year,omitempty"`
}

type GetStatisticsResponseYearwiseAuthenticDocumentsDetails struct {
	Count *int64 `json:"count,omitempty"`
	ID    *int64 `json:"id,omitempty"`
	Year  *int64 `json:"year,omitempty"`
}

type GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 struct {
	Count *int64 `json:"count,omitempty"`
	ID    *int64 `json:"id,omitempty"`
	Year  *int64 `json:"year,omitempty"`
}

type GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 struct {
	Count *int64 `json:"count,omitempty"`
	ID    *int64 `json:"id,omitempty"`
	Year  *int64 `json:"year,omitempty"`
}

// GetStatisticsResponseYearwiseAuthenticDocuments
// List of cumulative year-wise counts of authentic documents in DigiLocker.
type GetStatisticsResponseYearwiseAuthenticDocuments struct {
	Count    *int64                                                   `json:"count,omitempty"`
	Details  *GetStatisticsResponseYearwiseAuthenticDocumentsDetails  `json:"details,omitempty"`
	Details1 *GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 `json:"details1,omitempty"`
	Details2 *GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 `json:"details2,omitempty"`
	ID       *int64                                                   `json:"id,omitempty"`
	Year     *int64                                                   `json:"year,omitempty"`
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
