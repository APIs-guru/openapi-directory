package shared

type CustomerListCustomersResponse struct {
	Customers     []Company `json:"customers"`
	NextPageToken *string   `json:"nextPageToken"`
}
