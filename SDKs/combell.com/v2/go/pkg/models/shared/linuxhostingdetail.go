package shared

type LinuxHostingDetail struct {
	ActualSize         *int32           `json:"actual_size"`
	DomainName         *string          `json:"domain_name"`
	FtpEnabled         *bool            `json:"ftp_enabled"`
	FtpUsername        *string          `json:"ftp_username"`
	IP                 *string          `json:"ip"`
	IPType             *LinuxIPTypeEnum `json:"ip_type"`
	MaxSize            *int32           `json:"max_size"`
	MaxWebspaceSize    *int32           `json:"max_webspace_size"`
	MysqlDatabaseNames []string         `json:"mysql_database_names"`
	PhpVersion         *string          `json:"php_version"`
	ServicepackID      *int32           `json:"servicepack_id"`
	Sites              []LinuxSite      `json:"sites"`
	SSHHost            *string          `json:"ssh_host"`
	SSHUsername        *string          `json:"ssh_username"`
	WebspaceUsage      *int32           `json:"webspace_usage"`
}
