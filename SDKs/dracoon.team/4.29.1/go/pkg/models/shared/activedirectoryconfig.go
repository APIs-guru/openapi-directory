package shared



type ActiveDirectoryConfig struct {
    AdExportGroup string `json:"adExportGroup"`
    Alias string `json:"alias"`
    CreateHomeFolder *bool `json:"createHomeFolder,omitempty"`
    HomeFolderParent *int64 `json:"homeFolderParent,omitempty"`
    ID int32 `json:"id"`
    LdapUsersDomain string `json:"ldapUsersDomain"`
    SdsImportGroup *int64 `json:"sdsImportGroup,omitempty"`
    ServerAdminName string `json:"serverAdminName"`
    ServerIP string `json:"serverIp"`
    ServerPort int32 `json:"serverPort"`
    SslFingerPrint *string `json:"sslFingerPrint,omitempty"`
    UseLdaps bool `json:"useLdaps"`
    UserFilter string `json:"userFilter"`
    UserImport bool `json:"userImport"`
    
}

