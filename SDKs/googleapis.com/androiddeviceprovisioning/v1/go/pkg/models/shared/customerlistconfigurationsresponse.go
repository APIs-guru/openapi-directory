package shared

// CustomerListConfigurationsResponse
// Response message of customer's listing configuration.
type CustomerListConfigurationsResponse struct {
	Configurations []Configuration `json:"configurations,omitempty"`
}
