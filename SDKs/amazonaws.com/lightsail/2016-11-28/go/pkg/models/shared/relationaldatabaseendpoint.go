package shared

// RelationalDatabaseEndpoint
// Describes an endpoint for a database.
type RelationalDatabaseEndpoint struct {
	Address *string `json:"address,omitempty"`
	Port    *int64  `json:"port,omitempty"`
}
