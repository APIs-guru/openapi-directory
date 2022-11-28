package shared

// TestActiveDirectoryConfigRequest
// Request model for testing connection for Active Directory configuration
type TestActiveDirectoryConfigRequest struct {
	LdapUsersDomain     string  `json:"ldapUsersDomain"`
	ServerAdminName     string  `json:"serverAdminName"`
	ServerAdminPassword string  `json:"serverAdminPassword"`
	ServerIP            string  `json:"serverIp"`
	ServerPort          int32   `json:"serverPort"`
	SslFingerPrint      *string `json:"sslFingerPrint,omitempty"`
	UseLdaps            *bool   `json:"useLdaps,omitempty"`
}
