package shared

type ConnectionDetails struct {
	Connection   *Connection `json:"connection"`
	RecentMigVms []string    `json:"recentMigVms"`
}
