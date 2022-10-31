package shared



type WindowsHostingDetail struct {
    ActualSize *int32 `json:"actual_size,omitempty"`
    ApplicationPool *ApplicationPool `json:"application_pool,omitempty"`
    DomainName *string `json:"domain_name,omitempty"`
    FtpUsername *string `json:"ftp_username,omitempty"`
    IP *string `json:"ip,omitempty"`
    IPType *WindowsIPTypeEnum `json:"ip_type,omitempty"`
    MaxSize *int32 `json:"max_size,omitempty"`
    MssqlDatabaseNames []string `json:"mssql_database_names,omitempty"`
    ServicepackID *int32 `json:"servicepack_id,omitempty"`
    Sites []WindowsSite `json:"sites,omitempty"`
    
}

