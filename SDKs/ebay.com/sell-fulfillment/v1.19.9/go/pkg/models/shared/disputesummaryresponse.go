package shared

// DisputeSummaryResponse
// This type defines the base response payload of the getPaymentDisputeSummaries method. Each payment dispute that matches the input criteria is returned under the paymentDisputeSummaries array.
type DisputeSummaryResponse struct {
	Href                    *string                 `json:"href,omitempty"`
	Limit                   *int32                  `json:"limit,omitempty"`
	Next                    *string                 `json:"next,omitempty"`
	Offset                  *int32                  `json:"offset,omitempty"`
	PaymentDisputeSummaries []PaymentDisputeSummary `json:"paymentDisputeSummaries,omitempty"`
	Prev                    *string                 `json:"prev,omitempty"`
	Total                   *int32                  `json:"total,omitempty"`
}
