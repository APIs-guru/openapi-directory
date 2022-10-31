package shared




type SsoStrategyEntityDeprovisionBehaviorEnum string

const (
    SsoStrategyEntityDeprovisionBehaviorEnumDisable SsoStrategyEntityDeprovisionBehaviorEnum = "disable"
SsoStrategyEntityDeprovisionBehaviorEnumDelete SsoStrategyEntityDeprovisionBehaviorEnum = "delete"
)



type SsoStrategyEntityLdapUsernameFieldEnum string

const (
    SsoStrategyEntityLdapUsernameFieldEnumSAmAccountName SsoStrategyEntityLdapUsernameFieldEnum = "sAMAccountName"
SsoStrategyEntityLdapUsernameFieldEnumUserPrincipalName SsoStrategyEntityLdapUsernameFieldEnum = "userPrincipalName"
)



type SsoStrategyEntityProtocolEnum string

const (
    SsoStrategyEntityProtocolEnumOauth2 SsoStrategyEntityProtocolEnum = "oauth2"
SsoStrategyEntityProtocolEnumUnusedOpenid2 SsoStrategyEntityProtocolEnum = "_unused_openid2"
SsoStrategyEntityProtocolEnumSaml SsoStrategyEntityProtocolEnum = "saml"
SsoStrategyEntityProtocolEnumActiveDirectory SsoStrategyEntityProtocolEnum = "active_directory"
SsoStrategyEntityProtocolEnumOpenLdap SsoStrategyEntityProtocolEnum = "open_ldap"
SsoStrategyEntityProtocolEnumScim SsoStrategyEntityProtocolEnum = "scim"
)



type SsoStrategyEntityProviderEnum string

const (
    SsoStrategyEntityProviderEnumGoogle SsoStrategyEntityProviderEnum = "google"
SsoStrategyEntityProviderEnumAuth0 SsoStrategyEntityProviderEnum = "auth0"
SsoStrategyEntityProviderEnumOkta SsoStrategyEntityProviderEnum = "okta"
SsoStrategyEntityProviderEnumAtlassian SsoStrategyEntityProviderEnum = "atlassian"
SsoStrategyEntityProviderEnumAzure SsoStrategyEntityProviderEnum = "azure"
SsoStrategyEntityProviderEnumBox SsoStrategyEntityProviderEnum = "box"
SsoStrategyEntityProviderEnumDropbox SsoStrategyEntityProviderEnum = "dropbox"
SsoStrategyEntityProviderEnumSlack SsoStrategyEntityProviderEnum = "slack"
SsoStrategyEntityProviderEnumUnusedUbuntu SsoStrategyEntityProviderEnum = "_unused_ubuntu"
SsoStrategyEntityProviderEnumOnelogin SsoStrategyEntityProviderEnum = "onelogin"
SsoStrategyEntityProviderEnumSaml SsoStrategyEntityProviderEnum = "saml"
SsoStrategyEntityProviderEnumIdaptive SsoStrategyEntityProviderEnum = "idaptive"
SsoStrategyEntityProviderEnumLdap SsoStrategyEntityProviderEnum = "ldap"
SsoStrategyEntityProviderEnumScim SsoStrategyEntityProviderEnum = "scim"
)



type SsoStrategyEntityScimAuthenticationMethodEnum string

const (
    SsoStrategyEntityScimAuthenticationMethodEnumNone SsoStrategyEntityScimAuthenticationMethodEnum = "none"
SsoStrategyEntityScimAuthenticationMethodEnumBasic SsoStrategyEntityScimAuthenticationMethodEnum = "basic"
SsoStrategyEntityScimAuthenticationMethodEnumToken SsoStrategyEntityScimAuthenticationMethodEnum = "token"
)


type SsoStrategyEntity struct {
    DeprovisionBehavior *SsoStrategyEntityDeprovisionBehaviorEnum `json:"deprovision_behavior,omitempty"`
    DeprovisionGroups *bool `json:"deprovision_groups,omitempty"`
    DeprovisionUsers *bool `json:"deprovision_users,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    LdapBaseDn *string `json:"ldap_base_dn,omitempty"`
    LdapDomain *string `json:"ldap_domain,omitempty"`
    LdapHost *string `json:"ldap_host,omitempty"`
    LdapHost2 *string `json:"ldap_host_2,omitempty"`
    LdapHost3 *string `json:"ldap_host_3,omitempty"`
    LdapPort *int32 `json:"ldap_port,omitempty"`
    LdapSecure *bool `json:"ldap_secure,omitempty"`
    LdapUsername *string `json:"ldap_username,omitempty"`
    LdapUsernameField *SsoStrategyEntityLdapUsernameFieldEnum `json:"ldap_username_field,omitempty"`
    LogoURL *string `json:"logo_url,omitempty"`
    Protocol *SsoStrategyEntityProtocolEnum `json:"protocol,omitempty"`
    Provider *SsoStrategyEntityProviderEnum `json:"provider,omitempty"`
    ProvisionAttachmentsPermission *bool `json:"provision_attachments_permission,omitempty"`
    ProvisionCompany *string `json:"provision_company,omitempty"`
    ProvisionDavPermission *bool `json:"provision_dav_permission,omitempty"`
    ProvisionEmailSignupGroups *string `json:"provision_email_signup_groups,omitempty"`
    ProvisionFtpPermission *bool `json:"provision_ftp_permission,omitempty"`
    ProvisionGroupDefault *string `json:"provision_group_default,omitempty"`
    ProvisionGroupExclusion *string `json:"provision_group_exclusion,omitempty"`
    ProvisionGroupInclusion *string `json:"provision_group_inclusion,omitempty"`
    ProvisionGroupRequired *string `json:"provision_group_required,omitempty"`
    ProvisionGroups *bool `json:"provision_groups,omitempty"`
    ProvisionSftpPermission *bool `json:"provision_sftp_permission,omitempty"`
    ProvisionSiteAdminGroups *string `json:"provision_site_admin_groups,omitempty"`
    ProvisionTimeZone *string `json:"provision_time_zone,omitempty"`
    ProvisionUsers *bool `json:"provision_users,omitempty"`
    SamlProviderCertFingerprint *string `json:"saml_provider_cert_fingerprint,omitempty"`
    SamlProviderIssuerURL *string `json:"saml_provider_issuer_url,omitempty"`
    SamlProviderMetadataContent *string `json:"saml_provider_metadata_content,omitempty"`
    SamlProviderMetadataURL *string `json:"saml_provider_metadata_url,omitempty"`
    SamlProviderSloTargetURL *string `json:"saml_provider_slo_target_url,omitempty"`
    SamlProviderSsoTargetURL *string `json:"saml_provider_sso_target_url,omitempty"`
    ScimAuthenticationMethod *SsoStrategyEntityScimAuthenticationMethodEnum `json:"scim_authentication_method,omitempty"`
    ScimOauthAccessToken *string `json:"scim_oauth_access_token,omitempty"`
    ScimOauthAccessTokenExpiresAt *string `json:"scim_oauth_access_token_expires_at,omitempty"`
    ScimUsername *string `json:"scim_username,omitempty"`
    Subdomain *string `json:"subdomain,omitempty"`
    
}

