import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SsoStrategyEntityDeprovisionBehaviorEnum {
    Disable = "disable",
    Delete = "delete"
}
export declare enum SsoStrategyEntityLdapUsernameFieldEnum {
    SAmAccountName = "sAMAccountName",
    UserPrincipalName = "userPrincipalName"
}
export declare enum SsoStrategyEntityProtocolEnum {
    Oauth2 = "oauth2",
    UnusedOpenid2 = "_unused_openid2",
    Saml = "saml",
    ActiveDirectory = "active_directory",
    OpenLdap = "open_ldap",
    Scim = "scim"
}
export declare enum SsoStrategyEntityProviderEnum {
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
export declare enum SsoStrategyEntityScimAuthenticationMethodEnum {
    None = "none",
    Basic = "basic",
    Token = "token"
}
/**
 * List Sso Strategies
**/
export declare class SsoStrategyEntity extends SpeakeasyBase {
    deprovisionBehavior?: SsoStrategyEntityDeprovisionBehaviorEnum;
    deprovisionGroups?: boolean;
    deprovisionUsers?: boolean;
    enabled?: boolean;
    id?: number;
    label?: string;
    ldapBaseDn?: string;
    ldapDomain?: string;
    ldapHost?: string;
    ldapHost2?: string;
    ldapHost3?: string;
    ldapPort?: number;
    ldapSecure?: boolean;
    ldapUsername?: string;
    ldapUsernameField?: SsoStrategyEntityLdapUsernameFieldEnum;
    logoUrl?: string;
    protocol?: SsoStrategyEntityProtocolEnum;
    provider?: SsoStrategyEntityProviderEnum;
    provisionAttachmentsPermission?: boolean;
    provisionCompany?: string;
    provisionDavPermission?: boolean;
    provisionEmailSignupGroups?: string;
    provisionFtpPermission?: boolean;
    provisionGroupDefault?: string;
    provisionGroupExclusion?: string;
    provisionGroupInclusion?: string;
    provisionGroupRequired?: string;
    provisionGroups?: boolean;
    provisionSftpPermission?: boolean;
    provisionSiteAdminGroups?: string;
    provisionTimeZone?: string;
    provisionUsers?: boolean;
    samlProviderCertFingerprint?: string;
    samlProviderIssuerUrl?: string;
    samlProviderMetadataContent?: string;
    samlProviderMetadataUrl?: string;
    samlProviderSloTargetUrl?: string;
    samlProviderSsoTargetUrl?: string;
    scimAuthenticationMethod?: SsoStrategyEntityScimAuthenticationMethodEnum;
    scimOauthAccessToken?: string;
    scimOauthAccessTokenExpiresAt?: string;
    scimUsername?: string;
    subdomain?: string;
}
