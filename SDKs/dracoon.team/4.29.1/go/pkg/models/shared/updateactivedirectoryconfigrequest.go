package shared

type UpdateActiveDirectoryConfigRequest struct {
	AdExportGroup       *string `json:"adExportGroup"`
	Alias               *string `json:"alias"`
	CreateHomeFolder    *bool   `json:"createHomeFolder"`
	HomeFolderParent    *int64  `json:"homeFolderParent"`
	LdapUsersDomain     *string `json:"ldapUsersDomain"`
	SdsImportGroup      *int64  `json:"sdsImportGroup"`
	ServerAdminName     *string `json:"serverAdminName"`
	ServerAdminPassword *string `json:"serverAdminPassword"`
	ServerIP            *string `json:"serverIp"`
	ServerPort          *int32  `json:"serverPort"`
	SslFingerPrint      *string `json:"sslFingerPrint"`
	UseLdaps            *bool   `json:"useLdaps"`
	UserFilter          *string `json:"userFilter"`
	UserImport          *bool   `json:"userImport"`
}
