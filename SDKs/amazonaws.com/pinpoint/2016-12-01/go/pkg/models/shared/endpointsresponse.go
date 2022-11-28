package shared

// EndpointsResponse
// Provides information about all the endpoints that are associated with a user ID.
type EndpointsResponse struct {
	Item []EndpointResponse `json:"Item"`
}
