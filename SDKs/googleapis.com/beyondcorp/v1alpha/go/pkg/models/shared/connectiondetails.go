package shared



type ConnectionDetails struct {
    Connection *Connection `json:"connection,omitempty"`
    RecentMigVms []string `json:"recentMigVms,omitempty"`
    
}

