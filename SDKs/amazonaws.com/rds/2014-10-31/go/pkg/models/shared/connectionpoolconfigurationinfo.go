package shared

// ConnectionPoolConfigurationInfo
// Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.
type ConnectionPoolConfigurationInfo struct {
	ConnectionBorrowTimeout   *int64
	InitQuery                 *string
	MaxConnectionsPercent     *int64
	MaxIdleConnectionsPercent *int64
	SessionPinningFilters     []string
}
