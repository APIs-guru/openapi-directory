package shared

type UpdateActiveDirectoryConfigRequest struct {
	AdExportGroup       *string `json:"adExportGroup,omitempty"`
	Alias               *string `json:"alias,omitempty"`
	CreateHomeFolder    *bool   `json:"createHomeFolder,omitempty"`
	HomeFolderParent    *int64  `json:"homeFolderParent,omitempty"`
	LdapUsersDomain     *string `json:"ldapUsersDomain,omitempty"`
	SdsImportGroup      *int64  `json:"sdsImportGroup,omitempty"`
	ServerAdminName     *string `json:"serverAdminName,omitempty"`
	ServerAdminPassword *string `json:"serverAdminPassword,omitempty"`
	ServerIP            *string `json:"serverIp,omitempty"`
	ServerPort          *int32  `json:"serverPort,omitempty"`
	SslFingerPrint      *string `json:"sslFingerPrint,omitempty"`
	UseLdaps            *bool   `json:"useLdaps,omitempty"`
	UserFilter          *string `json:"userFilter,omitempty"`
	UserImport          *bool   `json:"userImport,omitempty"`
}
