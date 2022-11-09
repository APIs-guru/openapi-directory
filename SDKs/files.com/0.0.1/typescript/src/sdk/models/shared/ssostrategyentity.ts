import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SsoStrategyEntityDeprovisionBehaviorEnum {
    Disable = "disable"
,    Delete = "delete"
}

export enum SsoStrategyEntityLdapUsernameFieldEnum {
    SAmAccountName = "sAMAccountName"
,    UserPrincipalName = "userPrincipalName"
}

export enum SsoStrategyEntityProtocolEnum {
    Oauth2 = "oauth2"
,    UnusedOpenid2 = "_unused_openid2"
,    Saml = "saml"
,    ActiveDirectory = "active_directory"
,    OpenLdap = "open_ldap"
,    Scim = "scim"
}

export enum SsoStrategyEntityProviderEnum {
    Google = "google"
,    Auth0 = "auth0"
,    Okta = "okta"
,    Atlassian = "atlassian"
,    Azure = "azure"
,    Box = "box"
,    Dropbox = "dropbox"
,    Slack = "slack"
,    UnusedUbuntu = "_unused_ubuntu"
,    Onelogin = "onelogin"
,    Saml = "saml"
,    Idaptive = "idaptive"
,    Ldap = "ldap"
,    Scim = "scim"
}

export enum SsoStrategyEntityScimAuthenticationMethodEnum {
    None = "none"
,    Basic = "basic"
,    Token = "token"
}


// SsoStrategyEntity
/** 
 * List Sso Strategies
**/
export class SsoStrategyEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprovision_behavior" })
  deprovisionBehavior?: SsoStrategyEntityDeprovisionBehaviorEnum;

  @Metadata({ data: "json, name=deprovision_groups" })
  deprovisionGroups?: boolean;

  @Metadata({ data: "json, name=deprovision_users" })
  deprovisionUsers?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=ldap_base_dn" })
  ldapBaseDn?: string;

  @Metadata({ data: "json, name=ldap_domain" })
  ldapDomain?: string;

  @Metadata({ data: "json, name=ldap_host" })
  ldapHost?: string;

  @Metadata({ data: "json, name=ldap_host_2" })
  ldapHost2?: string;

  @Metadata({ data: "json, name=ldap_host_3" })
  ldapHost3?: string;

  @Metadata({ data: "json, name=ldap_port" })
  ldapPort?: number;

  @Metadata({ data: "json, name=ldap_secure" })
  ldapSecure?: boolean;

  @Metadata({ data: "json, name=ldap_username" })
  ldapUsername?: string;

  @Metadata({ data: "json, name=ldap_username_field" })
  ldapUsernameField?: SsoStrategyEntityLdapUsernameFieldEnum;

  @Metadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: SsoStrategyEntityProtocolEnum;

  @Metadata({ data: "json, name=provider" })
  provider?: SsoStrategyEntityProviderEnum;

  @Metadata({ data: "json, name=provision_attachments_permission" })
  provisionAttachmentsPermission?: boolean;

  @Metadata({ data: "json, name=provision_company" })
  provisionCompany?: string;

  @Metadata({ data: "json, name=provision_dav_permission" })
  provisionDavPermission?: boolean;

  @Metadata({ data: "json, name=provision_email_signup_groups" })
  provisionEmailSignupGroups?: string;

  @Metadata({ data: "json, name=provision_ftp_permission" })
  provisionFtpPermission?: boolean;

  @Metadata({ data: "json, name=provision_group_default" })
  provisionGroupDefault?: string;

  @Metadata({ data: "json, name=provision_group_exclusion" })
  provisionGroupExclusion?: string;

  @Metadata({ data: "json, name=provision_group_inclusion" })
  provisionGroupInclusion?: string;

  @Metadata({ data: "json, name=provision_group_required" })
  provisionGroupRequired?: string;

  @Metadata({ data: "json, name=provision_groups" })
  provisionGroups?: boolean;

  @Metadata({ data: "json, name=provision_sftp_permission" })
  provisionSftpPermission?: boolean;

  @Metadata({ data: "json, name=provision_site_admin_groups" })
  provisionSiteAdminGroups?: string;

  @Metadata({ data: "json, name=provision_time_zone" })
  provisionTimeZone?: string;

  @Metadata({ data: "json, name=provision_users" })
  provisionUsers?: boolean;

  @Metadata({ data: "json, name=saml_provider_cert_fingerprint" })
  samlProviderCertFingerprint?: string;

  @Metadata({ data: "json, name=saml_provider_issuer_url" })
  samlProviderIssuerUrl?: string;

  @Metadata({ data: "json, name=saml_provider_metadata_content" })
  samlProviderMetadataContent?: string;

  @Metadata({ data: "json, name=saml_provider_metadata_url" })
  samlProviderMetadataUrl?: string;

  @Metadata({ data: "json, name=saml_provider_slo_target_url" })
  samlProviderSloTargetUrl?: string;

  @Metadata({ data: "json, name=saml_provider_sso_target_url" })
  samlProviderSsoTargetUrl?: string;

  @Metadata({ data: "json, name=scim_authentication_method" })
  scimAuthenticationMethod?: SsoStrategyEntityScimAuthenticationMethodEnum;

  @Metadata({ data: "json, name=scim_oauth_access_token" })
  scimOauthAccessToken?: string;

  @Metadata({ data: "json, name=scim_oauth_access_token_expires_at" })
  scimOauthAccessTokenExpiresAt?: string;

  @Metadata({ data: "json, name=scim_username" })
  scimUsername?: string;

  @Metadata({ data: "json, name=subdomain" })
  subdomain?: string;
}
