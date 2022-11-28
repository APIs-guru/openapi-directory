package shared

// CustomerListCustomersResponse
// Response message for listing my customers.
type CustomerListCustomersResponse struct {
	Customers     []Company `json:"customers,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
