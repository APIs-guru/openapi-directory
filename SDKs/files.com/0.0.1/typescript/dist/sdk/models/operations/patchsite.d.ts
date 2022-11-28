import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchSiteRequestBodyIcon128File extends SpeakeasyBase {
    content: Uint8Array;
    icon128File: string;
}
export declare class PatchSiteRequestBodyIcon16File extends SpeakeasyBase {
    content: Uint8Array;
    icon16File: string;
}
export declare class PatchSiteRequestBodyIcon32File extends SpeakeasyBase {
    content: Uint8Array;
    icon32File: string;
}
export declare class PatchSiteRequestBodyIcon48File extends SpeakeasyBase {
    content: Uint8Array;
    icon48File: string;
}
export declare class PatchSiteRequestBodyLogoFile extends SpeakeasyBase {
    content: Uint8Array;
    logoFile: string;
}
export declare class PatchSiteRequestBody extends SpeakeasyBase {
    allowBundleNames?: boolean;
    allowed2faMethodSms?: boolean;
    allowed2faMethodTotp?: boolean;
    allowed2faMethodU2f?: boolean;
    allowed2faMethodYubi?: boolean;
    allowedCountries?: string;
    allowedIps?: string;
    askAboutOverwrites?: boolean;
    bundleExpiration?: number;
    bundlePasswordRequired?: boolean;
    bundleRequireShareRecipient?: boolean;
    color2Left?: string;
    color2Link?: string;
    color2Text?: string;
    color2Top?: string;
    color2TopText?: string;
    customNamespace?: boolean;
    daysToRetainBackups?: number;
    defaultTimeZone?: string;
    desktopApp?: boolean;
    desktopAppSessionIpPinning?: boolean;
    desktopAppSessionLifetime?: number;
    disable2faWithDelay?: boolean;
    disablePasswordReset?: boolean;
    disableUsersFromInactivityPeriodDays?: number;
    disallowedCountries?: string;
    domain?: string;
    email?: string;
    folderPermissionsGroupsOnly?: boolean;
    icon128Delete?: boolean;
    icon128File?: PatchSiteRequestBodyIcon128File;
    icon16Delete?: boolean;
    icon16File?: PatchSiteRequestBodyIcon16File;
    icon32Delete?: boolean;
    icon32File?: PatchSiteRequestBodyIcon32File;
    icon48Delete?: boolean;
    icon48File?: PatchSiteRequestBodyIcon48File;
    immutableFiles?: boolean;
    includePasswordInWelcomeEmail?: boolean;
    language?: string;
    ldapBaseDn?: string;
    ldapDomain?: string;
    ldapEnabled?: boolean;
    ldapGroupAction?: string;
    ldapGroupExclusion?: string;
    ldapGroupInclusion?: string;
    ldapHost?: string;
    ldapHost2?: string;
    ldapHost3?: string;
    ldapPasswordChange?: string;
    ldapPasswordChangeConfirmation?: string;
    ldapPort?: number;
    ldapSecure?: boolean;
    ldapType?: string;
    ldapUserAction?: string;
    ldapUserIncludeGroups?: string;
    ldapUsername?: string;
    ldapUsernameField?: string;
    loginHelpText?: string;
    logoDelete?: boolean;
    logoFile?: PatchSiteRequestBodyLogoFile;
    maxPriorPasswords?: number;
    mobileApp?: boolean;
    mobileAppSessionIpPinning?: boolean;
    mobileAppSessionLifetime?: number;
    name?: string;
    nonSsoGroupsAllowed?: boolean;
    nonSsoUsersAllowed?: boolean;
    officeIntegrationAvailable?: boolean;
    optOutGlobal?: boolean;
    overageNotify?: boolean;
    passwordMinLength?: number;
    passwordRequireLetter?: boolean;
    passwordRequireMixed?: boolean;
    passwordRequireNumber?: boolean;
    passwordRequireSpecial?: boolean;
    passwordRequireUnbreached?: boolean;
    passwordRequirementsApplyToBundles?: boolean;
    passwordValidityDays?: number;
    replyToEmail?: string;
    require2fa?: boolean;
    require2faUserType?: string;
    sessionExpiry?: number;
    sessionPinnedByIp?: boolean;
    sftpUserRootEnabled?: boolean;
    sharingEnabled?: boolean;
    showRequestAccessLink?: boolean;
    siteFooter?: string;
    siteHeader?: string;
    smtpAddress?: string;
    smtpAuthentication?: string;
    smtpFrom?: string;
    smtpPassword?: string;
    smtpPort?: number;
    smtpUsername?: string;
    sslRequired?: boolean;
    subdomain?: string;
    tlsDisabled?: boolean;
    useProvidedModifiedAt?: boolean;
    userLockout?: boolean;
    userLockoutLockPeriod?: number;
    userLockoutTries?: number;
    userLockoutWithin?: number;
    userRequestsEnabled?: boolean;
    welcomeCustomText?: string;
    welcomeEmailCc?: string;
    welcomeEmailEnabled?: boolean;
    welcomeScreen?: string;
    windowsModeFtp?: boolean;
}
export declare class PatchSiteRequest extends SpeakeasyBase {
    request?: PatchSiteRequestBody;
}
export declare class PatchSiteResponse extends SpeakeasyBase {
    contentType: string;
    siteEntity?: shared.SiteEntity;
    statusCode: number;
}
