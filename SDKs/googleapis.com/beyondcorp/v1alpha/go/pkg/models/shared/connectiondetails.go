package shared

// ConnectionDetails
// Details of the Connection.
type ConnectionDetails struct {
	Connection   *Connection `json:"connection,omitempty"`
	RecentMigVms []string    `json:"recentMigVms,omitempty"`
}
