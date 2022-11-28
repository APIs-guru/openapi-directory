package shared

// CreateActiveDirectoryConfigRequest
// Request model for creating an Active Directory configuration
type CreateActiveDirectoryConfigRequest struct {
	AdExportGroup       *string `json:"adExportGroup,omitempty"`
	Alias               string  `json:"alias"`
	CreateHomeFolder    *bool   `json:"createHomeFolder,omitempty"`
	HomeFolderParent    *int64  `json:"homeFolderParent,omitempty"`
	LdapUsersDomain     string  `json:"ldapUsersDomain"`
	SdsImportGroup      *int64  `json:"sdsImportGroup,omitempty"`
	ServerAdminName     string  `json:"serverAdminName"`
	ServerAdminPassword string  `json:"serverAdminPassword"`
	ServerIP            string  `json:"serverIp"`
	ServerPort          int32   `json:"serverPort"`
	SslFingerPrint      *string `json:"sslFingerPrint,omitempty"`
	UseLdaps            *bool   `json:"useLdaps,omitempty"`
	UserFilter          string  `json:"userFilter"`
	UserImport          *bool   `json:"userImport,omitempty"`
}
