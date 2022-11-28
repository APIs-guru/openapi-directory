import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserEntityAuthenticationMethodEnum {
    Password = "password",
    UnusedFormerLdap = "unused_former_ldap",
    Sso = "sso",
    None = "none",
    EmailSignup = "email_signup"
}
export declare enum UserEntityRequire2faEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare enum UserEntitySslRequiredEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
/**
 * Create User
**/
export declare class UserEntity extends SpeakeasyBase {
    active2fa?: boolean;
    adminGroupIds?: number[];
    allowedIps?: string;
    apiKeysCount?: number;
    attachmentsPermission?: boolean;
    authenticateUntil?: Date;
    authenticationMethod?: UserEntityAuthenticationMethodEnum;
    avatarUrl?: string;
    billingPermission?: boolean;
    bypassInactiveDisable?: boolean;
    bypassSiteAllowedIps?: boolean;
    company?: string;
    createdAt?: Date;
    davPermission?: boolean;
    disabled?: boolean;
    email?: string;
    externallyManaged?: boolean;
    ftpPermission?: boolean;
    groupIds?: string;
    headerText?: string;
    id?: number;
    language?: string;
    lastLoginAt?: Date;
    lastProtocolCipher?: string;
    lockoutExpires?: Date;
    name?: string;
    notes?: string;
    notificationDailySendTime?: number;
    officeIntegrationEnabled?: boolean;
    passwordSetAt?: Date;
    passwordValidityDays?: number;
    publicKeysCount?: number;
    receiveAdminAlerts?: boolean;
    require2fa?: UserEntityRequire2faEnum;
    requirePasswordChange?: boolean;
    restapiPermission?: boolean;
    selfManaged?: boolean;
    sftpPermission?: boolean;
    siteAdmin?: boolean;
    skipWelcomeScreen?: boolean;
    sslRequired?: UserEntitySslRequiredEnum;
    ssoStrategyId?: number;
    subscribeToNewsletter?: boolean;
    timeZone?: string;
    typeOf2fa?: string;
    userRoot?: string;
    username?: string;
}
