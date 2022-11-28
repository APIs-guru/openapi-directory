package shared

// BatchUpdateDealsResponse
// Response message for batch updating deals.
type BatchUpdateDealsResponse struct {
	Deals []Deal `json:"deals,omitempty"`
}
