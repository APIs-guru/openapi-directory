package shared

// Endpoint
// Describes a connection endpoint.
type Endpoint struct {
	Address      *string
	Port         *int64
	VpcEndpoints []VpcEndpoint
}
