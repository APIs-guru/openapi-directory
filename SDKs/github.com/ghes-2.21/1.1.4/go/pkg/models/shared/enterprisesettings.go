package shared



type EnterpriseSettingsEnterpriseAvatar struct {
    Enabled *bool `json:"enabled,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type EnterpriseSettingsEnterpriseCas struct {
    URL *string `json:"url,omitempty"`
    
}

type EnterpriseSettingsEnterpriseCollectd struct {
    Enabled *bool `json:"enabled,omitempty"`
    Encryption *string `json:"encryption,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Server *string `json:"server,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

type EnterpriseSettingsEnterpriseCustomer struct {
    Email *string `json:"email,omitempty"`
    Name *string `json:"name,omitempty"`
    PublicKeyData *string `json:"public_key_data,omitempty"`
    SecretKeyData *string `json:"secret_key_data,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

type EnterpriseSettingsEnterpriseGithubOauth struct {
    ClientID *string `json:"client_id,omitempty"`
    ClientSecret *string `json:"client_secret,omitempty"`
    OrganizationName *string `json:"organization_name,omitempty"`
    OrganizationTeam *string `json:"organization_team,omitempty"`
    
}

type EnterpriseSettingsEnterpriseGithubSsl struct {
    Cert *string `json:"cert,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Key *string `json:"key,omitempty"`
    
}

type EnterpriseSettingsEnterpriseLdapProfile struct {
    Key *string `json:"key,omitempty"`
    Mail *string `json:"mail,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type EnterpriseSettingsEnterpriseLdapReconciliation struct {
    Org *string `json:"org,omitempty"`
    User *string `json:"user,omitempty"`
    
}

type EnterpriseSettingsEnterpriseLdap struct {
    AdminGroup *string `json:"admin_group,omitempty"`
    Base []interface{} `json:"base,omitempty"`
    BindDn *string `json:"bind_dn,omitempty"`
    Host *string `json:"host,omitempty"`
    Method *string `json:"method,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *int64 `json:"port,omitempty"`
    PosixSupport *bool `json:"posix_support,omitempty"`
    Profile *EnterpriseSettingsEnterpriseLdapProfile `json:"profile,omitempty"`
    Reconciliation *EnterpriseSettingsEnterpriseLdapReconciliation `json:"reconciliation,omitempty"`
    RecursiveGroupSearch *bool `json:"recursive_group_search,omitempty"`
    SearchStrategy *string `json:"search_strategy,omitempty"`
    SyncEnabled *bool `json:"sync_enabled,omitempty"`
    TeamSyncInterval *int64 `json:"team_sync_interval,omitempty"`
    UID *string `json:"uid,omitempty"`
    UserGroups []interface{} `json:"user_groups,omitempty"`
    UserSyncEmails *bool `json:"user_sync_emails,omitempty"`
    UserSyncInterval *int64 `json:"user_sync_interval,omitempty"`
    UserSyncKeys *bool `json:"user_sync_keys,omitempty"`
    VirtualAttributeEnabled *bool `json:"virtual_attribute_enabled,omitempty"`
    
}

type EnterpriseSettingsEnterpriseLicense struct {
    ClusterSupport *bool `json:"cluster_support,omitempty"`
    Evaluation *bool `json:"evaluation,omitempty"`
    ExpireAt *string `json:"expire_at,omitempty"`
    Perpetual *bool `json:"perpetual,omitempty"`
    Seats *int64 `json:"seats,omitempty"`
    SSHAllowed *bool `json:"ssh_allowed,omitempty"`
    SupportKey *string `json:"support_key,omitempty"`
    UnlimitedSeating *bool `json:"unlimited_seating,omitempty"`
    
}

type EnterpriseSettingsEnterpriseMapping struct {
    Basemap *string `json:"basemap,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Tileserver *string `json:"tileserver,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

type EnterpriseSettingsEnterpriseNtp struct {
    PrimaryServer *string `json:"primary_server,omitempty"`
    SecondaryServer *string `json:"secondary_server,omitempty"`
    
}

type EnterpriseSettingsEnterprisePages struct {
    Enabled *bool `json:"enabled,omitempty"`
    
}

type EnterpriseSettingsEnterpriseSaml struct {
    Certificate *string `json:"certificate,omitempty"`
    CertificatePath *string `json:"certificate_path,omitempty"`
    DisableAdminDemote *bool `json:"disable_admin_demote,omitempty"`
    IdpInitiatedSso *bool `json:"idp_initiated_sso,omitempty"`
    Issuer *string `json:"issuer,omitempty"`
    SsoURL *string `json:"sso_url,omitempty"`
    
}

type EnterpriseSettingsEnterpriseSMTP struct {
    Address *string `json:"address,omitempty"`
    Authentication *string `json:"authentication,omitempty"`
    DiscardToNoreplyAddress *bool `json:"discard-to-noreply-address,omitempty"`
    Domain *string `json:"domain,omitempty"`
    EnableStarttlsAuto *bool `json:"enable_starttls_auto,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    NoreplyAddress *string `json:"noreply_address,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *string `json:"port,omitempty"`
    SupportAddress *string `json:"support_address,omitempty"`
    SupportAddressType *string `json:"support_address_type,omitempty"`
    UserName *string `json:"user_name,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

type EnterpriseSettingsEnterpriseSnmp struct {
    Community *string `json:"community,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    
}

type EnterpriseSettingsEnterpriseSyslog struct {
    Enabled *bool `json:"enabled,omitempty"`
    ProtocolName *string `json:"protocol_name,omitempty"`
    Server *string `json:"server,omitempty"`
    
}

type EnterpriseSettingsEnterprise struct {
    AdminPassword *string `json:"admin_password,omitempty"`
    Assets *string `json:"assets,omitempty"`
    AuthMode *string `json:"auth_mode,omitempty"`
    Avatar *EnterpriseSettingsEnterpriseAvatar `json:"avatar,omitempty"`
    Cas *EnterpriseSettingsEnterpriseCas `json:"cas,omitempty"`
    Collectd *EnterpriseSettingsEnterpriseCollectd `json:"collectd,omitempty"`
    ConfigurationID *int64 `json:"configuration_id,omitempty"`
    ConfigurationRunCount *int64 `json:"configuration_run_count,omitempty"`
    Customer *EnterpriseSettingsEnterpriseCustomer `json:"customer,omitempty"`
    ExpireSessions *bool `json:"expire_sessions,omitempty"`
    GithubHostname *string `json:"github_hostname,omitempty"`
    GithubOauth *EnterpriseSettingsEnterpriseGithubOauth `json:"github_oauth,omitempty"`
    GithubSsl *EnterpriseSettingsEnterpriseGithubSsl `json:"github_ssl,omitempty"`
    HTTPProxy *string `json:"http_proxy,omitempty"`
    IdenticonsHost *string `json:"identicons_host,omitempty"`
    Ldap *EnterpriseSettingsEnterpriseLdap `json:"ldap,omitempty"`
    License *EnterpriseSettingsEnterpriseLicense `json:"license,omitempty"`
    LoadBalancer *string `json:"load_balancer,omitempty"`
    Mapping *EnterpriseSettingsEnterpriseMapping `json:"mapping,omitempty"`
    Ntp *EnterpriseSettingsEnterpriseNtp `json:"ntp,omitempty"`
    Pages *EnterpriseSettingsEnterprisePages `json:"pages,omitempty"`
    PrivateMode *bool `json:"private_mode,omitempty"`
    PublicPages *bool `json:"public_pages,omitempty"`
    Saml *EnterpriseSettingsEnterpriseSaml `json:"saml,omitempty"`
    SignupEnabled *bool `json:"signup_enabled,omitempty"`
    SMTP *EnterpriseSettingsEnterpriseSMTP `json:"smtp,omitempty"`
    Snmp *EnterpriseSettingsEnterpriseSnmp `json:"snmp,omitempty"`
    SubdomainIsolation *bool `json:"subdomain_isolation,omitempty"`
    Syslog *EnterpriseSettingsEnterpriseSyslog `json:"syslog,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    
}

type EnterpriseSettings struct {
    Enterprise *EnterpriseSettingsEnterprise `json:"enterprise,omitempty"`
    RunList []string `json:"run_list,omitempty"`
    
}

