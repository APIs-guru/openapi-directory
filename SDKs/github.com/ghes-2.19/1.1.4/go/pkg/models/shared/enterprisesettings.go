package shared

type EnterpriseSettingsEnterpriseAvatar struct {
	Enabled *bool   `json:"enabled"`
	URI     *string `json:"uri"`
}

type EnterpriseSettingsEnterpriseCas struct {
	URL *string `json:"url"`
}

type EnterpriseSettingsEnterpriseCollectd struct {
	Enabled    *bool   `json:"enabled"`
	Encryption *string `json:"encryption"`
	Password   *string `json:"password"`
	Port       *int64  `json:"port"`
	Server     *string `json:"server"`
	Username   *string `json:"username"`
}

type EnterpriseSettingsEnterpriseCustomer struct {
	Email         *string `json:"email"`
	Name          *string `json:"name"`
	PublicKeyData *string `json:"public_key_data"`
	SecretKeyData *string `json:"secret_key_data"`
	UUID          *string `json:"uuid"`
}

type EnterpriseSettingsEnterpriseGithubOauth struct {
	ClientID         *string `json:"client_id"`
	ClientSecret     *string `json:"client_secret"`
	OrganizationName *string `json:"organization_name"`
	OrganizationTeam *string `json:"organization_team"`
}

type EnterpriseSettingsEnterpriseGithubSsl struct {
	Cert    *string `json:"cert"`
	Enabled *bool   `json:"enabled"`
	Key     *string `json:"key"`
}

type EnterpriseSettingsEnterpriseLdapProfile struct {
	Key  *string `json:"key"`
	Mail *string `json:"mail"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type EnterpriseSettingsEnterpriseLdapReconciliation struct {
	Org  *string `json:"org"`
	User *string `json:"user"`
}

type EnterpriseSettingsEnterpriseLdap struct {
	AdminGroup              *string                                         `json:"admin_group"`
	Base                    []interface{}                                   `json:"base"`
	BindDn                  *string                                         `json:"bind_dn"`
	Host                    *string                                         `json:"host"`
	Method                  *string                                         `json:"method"`
	Password                *string                                         `json:"password"`
	Port                    *int64                                          `json:"port"`
	PosixSupport            *bool                                           `json:"posix_support"`
	Profile                 *EnterpriseSettingsEnterpriseLdapProfile        `json:"profile"`
	Reconciliation          *EnterpriseSettingsEnterpriseLdapReconciliation `json:"reconciliation"`
	RecursiveGroupSearch    *bool                                           `json:"recursive_group_search"`
	SearchStrategy          *string                                         `json:"search_strategy"`
	SyncEnabled             *bool                                           `json:"sync_enabled"`
	TeamSyncInterval        *int64                                          `json:"team_sync_interval"`
	UID                     *string                                         `json:"uid"`
	UserGroups              []interface{}                                   `json:"user_groups"`
	UserSyncEmails          *bool                                           `json:"user_sync_emails"`
	UserSyncInterval        *int64                                          `json:"user_sync_interval"`
	UserSyncKeys            *bool                                           `json:"user_sync_keys"`
	VirtualAttributeEnabled *bool                                           `json:"virtual_attribute_enabled"`
}

type EnterpriseSettingsEnterpriseLicense struct {
	ClusterSupport   *bool   `json:"cluster_support"`
	Evaluation       *bool   `json:"evaluation"`
	ExpireAt         *string `json:"expire_at"`
	Perpetual        *bool   `json:"perpetual"`
	Seats            *int64  `json:"seats"`
	SSHAllowed       *bool   `json:"ssh_allowed"`
	SupportKey       *string `json:"support_key"`
	UnlimitedSeating *bool   `json:"unlimited_seating"`
}

type EnterpriseSettingsEnterpriseMapping struct {
	Basemap    *string `json:"basemap"`
	Enabled    *bool   `json:"enabled"`
	Tileserver *string `json:"tileserver"`
	Token      *string `json:"token"`
}

type EnterpriseSettingsEnterpriseNtp struct {
	PrimaryServer   *string `json:"primary_server"`
	SecondaryServer *string `json:"secondary_server"`
}

type EnterpriseSettingsEnterprisePages struct {
	Enabled *bool `json:"enabled"`
}

type EnterpriseSettingsEnterpriseSaml struct {
	Certificate        *string `json:"certificate"`
	CertificatePath    *string `json:"certificate_path"`
	DisableAdminDemote *bool   `json:"disable_admin_demote"`
	IdpInitiatedSso    *bool   `json:"idp_initiated_sso"`
	Issuer             *string `json:"issuer"`
	SsoURL             *string `json:"sso_url"`
}

type EnterpriseSettingsEnterpriseSMTP struct {
	Address                 *string `json:"address"`
	Authentication          *string `json:"authentication"`
	DiscardToNoreplyAddress *bool   `json:"discard-to-noreply-address"`
	Domain                  *string `json:"domain"`
	EnableStarttlsAuto      *bool   `json:"enable_starttls_auto"`
	Enabled                 *bool   `json:"enabled"`
	NoreplyAddress          *string `json:"noreply_address"`
	Password                *string `json:"password"`
	Port                    *string `json:"port"`
	SupportAddress          *string `json:"support_address"`
	SupportAddressType      *string `json:"support_address_type"`
	UserName                *string `json:"user_name"`
	Username                *string `json:"username"`
}

type EnterpriseSettingsEnterpriseSnmp struct {
	Community *string `json:"community"`
	Enabled   *bool   `json:"enabled"`
}

type EnterpriseSettingsEnterpriseSyslog struct {
	Enabled      *bool   `json:"enabled"`
	ProtocolName *string `json:"protocol_name"`
	Server       *string `json:"server"`
}

type EnterpriseSettingsEnterprise struct {
	AdminPassword         *string                                  `json:"admin_password"`
	Assets                *string                                  `json:"assets"`
	AuthMode              *string                                  `json:"auth_mode"`
	Avatar                *EnterpriseSettingsEnterpriseAvatar      `json:"avatar"`
	Cas                   *EnterpriseSettingsEnterpriseCas         `json:"cas"`
	Collectd              *EnterpriseSettingsEnterpriseCollectd    `json:"collectd"`
	ConfigurationID       *int64                                   `json:"configuration_id"`
	ConfigurationRunCount *int64                                   `json:"configuration_run_count"`
	Customer              *EnterpriseSettingsEnterpriseCustomer    `json:"customer"`
	ExpireSessions        *bool                                    `json:"expire_sessions"`
	GithubHostname        *string                                  `json:"github_hostname"`
	GithubOauth           *EnterpriseSettingsEnterpriseGithubOauth `json:"github_oauth"`
	GithubSsl             *EnterpriseSettingsEnterpriseGithubSsl   `json:"github_ssl"`
	HTTPProxy             *string                                  `json:"http_proxy"`
	IdenticonsHost        *string                                  `json:"identicons_host"`
	Ldap                  *EnterpriseSettingsEnterpriseLdap        `json:"ldap"`
	License               *EnterpriseSettingsEnterpriseLicense     `json:"license"`
	LoadBalancer          *string                                  `json:"load_balancer"`
	Mapping               *EnterpriseSettingsEnterpriseMapping     `json:"mapping"`
	Ntp                   *EnterpriseSettingsEnterpriseNtp         `json:"ntp"`
	Pages                 *EnterpriseSettingsEnterprisePages       `json:"pages"`
	PrivateMode           *bool                                    `json:"private_mode"`
	PublicPages           *bool                                    `json:"public_pages"`
	Saml                  *EnterpriseSettingsEnterpriseSaml        `json:"saml"`
	SignupEnabled         *bool                                    `json:"signup_enabled"`
	SMTP                  *EnterpriseSettingsEnterpriseSMTP        `json:"smtp"`
	Snmp                  *EnterpriseSettingsEnterpriseSnmp        `json:"snmp"`
	SubdomainIsolation    *bool                                    `json:"subdomain_isolation"`
	Syslog                *EnterpriseSettingsEnterpriseSyslog      `json:"syslog"`
	Timezone              *string                                  `json:"timezone"`
}

type EnterpriseSettings struct {
	Enterprise *EnterpriseSettingsEnterprise `json:"enterprise"`
	RunList    []string                      `json:"run_list"`
}
