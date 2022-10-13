package shared

type TestActiveDirectoryConfigResponse struct {
	LdapUsersDomain     string  `json:"ldapUsersDomain"`
	ServerAdminName     string  `json:"serverAdminName"`
	ServerAdminPassword string  `json:"serverAdminPassword"`
	ServerIP            string  `json:"serverIp"`
	ServerPort          int32   `json:"serverPort"`
	SslFingerPrint      *string `json:"sslFingerPrint"`
	UseLdaps            bool    `json:"useLdaps"`
}
