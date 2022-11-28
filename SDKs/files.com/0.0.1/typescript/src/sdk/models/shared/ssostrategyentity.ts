import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SsoStrategyEntityDeprovisionBehaviorEnum {
    Disable = "disable",
    Delete = "delete"
}

export enum SsoStrategyEntityLdapUsernameFieldEnum {
    SAmAccountName = "sAMAccountName",
    UserPrincipalName = "userPrincipalName"
}

export enum SsoStrategyEntityProtocolEnum {
    Oauth2 = "oauth2",
    UnusedOpenid2 = "_unused_openid2",
    Saml = "saml",
    ActiveDirectory = "active_directory",
    OpenLdap = "open_ldap",
    Scim = "scim"
}

export enum SsoStrategyEntityProviderEnum {
    Google = "google",
    Auth0 = "auth0",
    Okta = "okta",
    Atlassian = "atlassian",
    Azure = "azure",
    Box = "box",
    Dropbox = "dropbox",
    Slack = "slack",
    UnusedUbuntu = "_unused_ubuntu",
    Onelogin = "onelogin",
    Saml = "saml",
    Idaptive = "idaptive",
    Ldap = "ldap",
    Scim = "scim"
}

export enum SsoStrategyEntityScimAuthenticationMethodEnum {
    None = "none",
    Basic = "basic",
    Token = "token"
}


// SsoStrategyEntity
/** 
 * List Sso Strategies
**/
export class SsoStrategyEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprovision_behavior" })
  deprovisionBehavior?: SsoStrategyEntityDeprovisionBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=deprovision_groups" })
  deprovisionGroups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deprovision_users" })
  deprovisionUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_base_dn" })
  ldapBaseDn?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_domain" })
  ldapDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_host" })
  ldapHost?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_host_2" })
  ldapHost2?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_host_3" })
  ldapHost3?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_port" })
  ldapPort?: number;

  @SpeakeasyMetadata({ data: "json, name=ldap_secure" })
  ldapSecure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ldap_username" })
  ldapUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_username_field" })
  ldapUsernameField?: SsoStrategyEntityLdapUsernameFieldEnum;

  @SpeakeasyMetadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: SsoStrategyEntityProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: SsoStrategyEntityProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=provision_attachments_permission" })
  provisionAttachmentsPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=provision_company" })
  provisionCompany?: string;

  @SpeakeasyMetadata({ data: "json, name=provision_dav_permission" })
  provisionDavPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=provision_email_signup_groups" })
  provisionEmailSignupGroups?: string;

  @SpeakeasyMetadata({ data: "json, name=provision_ftp_permission" })
  provisionFtpPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=provision_group_default" })
  provisionGroupDefault?: string;

  @SpeakeasyMetadata({ data: "json, name=provision_group_exclusion" })
  provisionGroupExclusion?: string;

  @SpeakeasyMetadata({ data: "json, name=provision_group_inclusion" })
  provisionGroupInclusion?: string;

  @SpeakeasyMetadata({ data: "json, name=provision_group_required" })
  provisionGroupRequired?: string;

  @SpeakeasyMetadata({ data: "json, name=provision_groups" })
  provisionGroups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=provision_sftp_permission" })
  provisionSftpPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=provision_site_admin_groups" })
  provisionSiteAdminGroups?: string;

  @SpeakeasyMetadata({ data: "json, name=provision_time_zone" })
  provisionTimeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=provision_users" })
  provisionUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=saml_provider_cert_fingerprint" })
  samlProviderCertFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=saml_provider_issuer_url" })
  samlProviderIssuerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=saml_provider_metadata_content" })
  samlProviderMetadataContent?: string;

  @SpeakeasyMetadata({ data: "json, name=saml_provider_metadata_url" })
  samlProviderMetadataUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=saml_provider_slo_target_url" })
  samlProviderSloTargetUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=saml_provider_sso_target_url" })
  samlProviderSsoTargetUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=scim_authentication_method" })
  scimAuthenticationMethod?: SsoStrategyEntityScimAuthenticationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=scim_oauth_access_token" })
  scimOauthAccessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=scim_oauth_access_token_expires_at" })
  scimOauthAccessTokenExpiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=scim_username" })
  scimUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=subdomain" })
  subdomain?: string;
}
