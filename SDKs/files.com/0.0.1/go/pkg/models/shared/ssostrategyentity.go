package shared

type SsoStrategyEntityDeprovisionBehaviorEnum string

const (
	SsoStrategyEntityDeprovisionBehaviorEnumDisable SsoStrategyEntityDeprovisionBehaviorEnum = "disable"
	SsoStrategyEntityDeprovisionBehaviorEnumDelete  SsoStrategyEntityDeprovisionBehaviorEnum = "delete"
)

type SsoStrategyEntityLdapUsernameFieldEnum string

const (
	SsoStrategyEntityLdapUsernameFieldEnumSAmAccountName    SsoStrategyEntityLdapUsernameFieldEnum = "sAMAccountName"
	SsoStrategyEntityLdapUsernameFieldEnumUserPrincipalName SsoStrategyEntityLdapUsernameFieldEnum = "userPrincipalName"
)

type SsoStrategyEntityProtocolEnum string

const (
	SsoStrategyEntityProtocolEnumOauth2          SsoStrategyEntityProtocolEnum = "oauth2"
	SsoStrategyEntityProtocolEnumUnusedOpenid2   SsoStrategyEntityProtocolEnum = "_unused_openid2"
	SsoStrategyEntityProtocolEnumSaml            SsoStrategyEntityProtocolEnum = "saml"
	SsoStrategyEntityProtocolEnumActiveDirectory SsoStrategyEntityProtocolEnum = "active_directory"
	SsoStrategyEntityProtocolEnumOpenLdap        SsoStrategyEntityProtocolEnum = "open_ldap"
	SsoStrategyEntityProtocolEnumScim            SsoStrategyEntityProtocolEnum = "scim"
)

type SsoStrategyEntityProviderEnum string

const (
	SsoStrategyEntityProviderEnumGoogle       SsoStrategyEntityProviderEnum = "google"
	SsoStrategyEntityProviderEnumAuth0        SsoStrategyEntityProviderEnum = "auth0"
	SsoStrategyEntityProviderEnumOkta         SsoStrategyEntityProviderEnum = "okta"
	SsoStrategyEntityProviderEnumAtlassian    SsoStrategyEntityProviderEnum = "atlassian"
	SsoStrategyEntityProviderEnumAzure        SsoStrategyEntityProviderEnum = "azure"
	SsoStrategyEntityProviderEnumBox          SsoStrategyEntityProviderEnum = "box"
	SsoStrategyEntityProviderEnumDropbox      SsoStrategyEntityProviderEnum = "dropbox"
	SsoStrategyEntityProviderEnumSlack        SsoStrategyEntityProviderEnum = "slack"
	SsoStrategyEntityProviderEnumUnusedUbuntu SsoStrategyEntityProviderEnum = "_unused_ubuntu"
	SsoStrategyEntityProviderEnumOnelogin     SsoStrategyEntityProviderEnum = "onelogin"
	SsoStrategyEntityProviderEnumSaml         SsoStrategyEntityProviderEnum = "saml"
	SsoStrategyEntityProviderEnumIdaptive     SsoStrategyEntityProviderEnum = "idaptive"
	SsoStrategyEntityProviderEnumLdap         SsoStrategyEntityProviderEnum = "ldap"
	SsoStrategyEntityProviderEnumScim         SsoStrategyEntityProviderEnum = "scim"
)

type SsoStrategyEntityScimAuthenticationMethodEnum string

const (
	SsoStrategyEntityScimAuthenticationMethodEnumNone  SsoStrategyEntityScimAuthenticationMethodEnum = "none"
	SsoStrategyEntityScimAuthenticationMethodEnumBasic SsoStrategyEntityScimAuthenticationMethodEnum = "basic"
	SsoStrategyEntityScimAuthenticationMethodEnumToken SsoStrategyEntityScimAuthenticationMethodEnum = "token"
)

type SsoStrategyEntity struct {
	DeprovisionBehavior            *SsoStrategyEntityDeprovisionBehaviorEnum      `json:"deprovision_behavior"`
	DeprovisionGroups              *bool                                          `json:"deprovision_groups"`
	DeprovisionUsers               *bool                                          `json:"deprovision_users"`
	Enabled                        *bool                                          `json:"enabled"`
	ID                             *int32                                         `json:"id"`
	Label                          *string                                        `json:"label"`
	LdapBaseDn                     *string                                        `json:"ldap_base_dn"`
	LdapDomain                     *string                                        `json:"ldap_domain"`
	LdapHost                       *string                                        `json:"ldap_host"`
	LdapHost2                      *string                                        `json:"ldap_host_2"`
	LdapHost3                      *string                                        `json:"ldap_host_3"`
	LdapPort                       *int32                                         `json:"ldap_port"`
	LdapSecure                     *bool                                          `json:"ldap_secure"`
	LdapUsername                   *string                                        `json:"ldap_username"`
	LdapUsernameField              *SsoStrategyEntityLdapUsernameFieldEnum        `json:"ldap_username_field"`
	LogoURL                        *string                                        `json:"logo_url"`
	Protocol                       *SsoStrategyEntityProtocolEnum                 `json:"protocol"`
	Provider                       *SsoStrategyEntityProviderEnum                 `json:"provider"`
	ProvisionAttachmentsPermission *bool                                          `json:"provision_attachments_permission"`
	ProvisionCompany               *string                                        `json:"provision_company"`
	ProvisionDavPermission         *bool                                          `json:"provision_dav_permission"`
	ProvisionEmailSignupGroups     *string                                        `json:"provision_email_signup_groups"`
	ProvisionFtpPermission         *bool                                          `json:"provision_ftp_permission"`
	ProvisionGroupDefault          *string                                        `json:"provision_group_default"`
	ProvisionGroupExclusion        *string                                        `json:"provision_group_exclusion"`
	ProvisionGroupInclusion        *string                                        `json:"provision_group_inclusion"`
	ProvisionGroupRequired         *string                                        `json:"provision_group_required"`
	ProvisionGroups                *bool                                          `json:"provision_groups"`
	ProvisionSftpPermission        *bool                                          `json:"provision_sftp_permission"`
	ProvisionSiteAdminGroups       *string                                        `json:"provision_site_admin_groups"`
	ProvisionTimeZone              *string                                        `json:"provision_time_zone"`
	ProvisionUsers                 *bool                                          `json:"provision_users"`
	SamlProviderCertFingerprint    *string                                        `json:"saml_provider_cert_fingerprint"`
	SamlProviderIssuerURL          *string                                        `json:"saml_provider_issuer_url"`
	SamlProviderMetadataContent    *string                                        `json:"saml_provider_metadata_content"`
	SamlProviderMetadataURL        *string                                        `json:"saml_provider_metadata_url"`
	SamlProviderSloTargetURL       *string                                        `json:"saml_provider_slo_target_url"`
	SamlProviderSsoTargetURL       *string                                        `json:"saml_provider_sso_target_url"`
	ScimAuthenticationMethod       *SsoStrategyEntityScimAuthenticationMethodEnum `json:"scim_authentication_method"`
	ScimOauthAccessToken           *string                                        `json:"scim_oauth_access_token"`
	ScimOauthAccessTokenExpiresAt  *string                                        `json:"scim_oauth_access_token_expires_at"`
	ScimUsername                   *string                                        `json:"scim_username"`
	Subdomain                      *string                                        `json:"subdomain"`
}
