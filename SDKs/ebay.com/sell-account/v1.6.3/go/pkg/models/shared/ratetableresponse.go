package shared

// RateTableResponse
// The response container for with information on a seller's shipping rate tables.
type RateTableResponse struct {
	RateTables []RateTable `json:"rateTables,omitempty"`
}
