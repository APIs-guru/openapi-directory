package shared

type WindowsHostingDetail struct {
	ActualSize         *int32             `json:"actual_size"`
	ApplicationPool    *ApplicationPool   `json:"application_pool"`
	DomainName         *string            `json:"domain_name"`
	FtpUsername        *string            `json:"ftp_username"`
	IP                 *string            `json:"ip"`
	IPType             *WindowsIPTypeEnum `json:"ip_type"`
	MaxSize            *int32             `json:"max_size"`
	MssqlDatabaseNames []string           `json:"mssql_database_names"`
	ServicepackID      *int32             `json:"servicepack_id"`
	Sites              []WindowsSite      `json:"sites"`
}
