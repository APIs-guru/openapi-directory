package shared

type LinuxHostingDetail struct {
	ActualSize         *int32           `json:"actual_size,omitempty"`
	DomainName         *string          `json:"domain_name,omitempty"`
	FtpEnabled         *bool            `json:"ftp_enabled,omitempty"`
	FtpUsername        *string          `json:"ftp_username,omitempty"`
	IP                 *string          `json:"ip,omitempty"`
	IPType             *LinuxIPTypeEnum `json:"ip_type,omitempty"`
	MaxSize            *int32           `json:"max_size,omitempty"`
	MaxWebspaceSize    *int32           `json:"max_webspace_size,omitempty"`
	MysqlDatabaseNames []string         `json:"mysql_database_names,omitempty"`
	PhpVersion         *string          `json:"php_version,omitempty"`
	ServicepackID      *int32           `json:"servicepack_id,omitempty"`
	Sites              []LinuxSite      `json:"sites,omitempty"`
	SSHHost            *string          `json:"ssh_host,omitempty"`
	SSHUsername        *string          `json:"ssh_username,omitempty"`
	WebspaceUsage      *int32           `json:"webspace_usage,omitempty"`
}
