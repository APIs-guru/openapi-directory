package shared

type DisputeSummaryResponse struct {
	Href                    *string                 `json:"href"`
	Limit                   *int32                  `json:"limit"`
	Next                    *string                 `json:"next"`
	Offset                  *int32                  `json:"offset"`
	PaymentDisputeSummaries []PaymentDisputeSummary `json:"paymentDisputeSummaries"`
	Prev                    *string                 `json:"prev"`
	Total                   *int32                  `json:"total"`
}
