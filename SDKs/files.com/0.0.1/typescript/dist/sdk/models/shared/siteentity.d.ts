import { SpeakeasyBase } from "../../../internal/utils";
import { ImageEntity } from "./imageentity";
import { SessionEntity } from "./sessionentity";
import { UserEntity } from "./userentity";
export declare enum SiteEntityRequire2faUserTypeEnum {
    All = "all",
    FolderAndSiteAdmins = "folder_and_site_admins",
    SiteAdmins = "site_admins"
}
export declare enum SiteEntityWelcomeScreenEnum {
    Enabled = "enabled",
    Hidden = "hidden",
    Disabled = "disabled"
}
/**
 * Show site settings
**/
export declare class SiteEntity extends SpeakeasyBase {
    adminUserId?: number;
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
    contactName?: string;
    createdAt?: Date;
    currency?: string;
    customNamespace?: boolean;
    daysToRetainBackups?: number;
    defaultTimeZone?: string;
    desktopApp?: boolean;
    desktopAppSessionIpPinning?: boolean;
    desktopAppSessionLifetime?: number;
    disableNotifications?: boolean;
    disablePasswordReset?: boolean;
    disableUsersFromInactivityPeriodDays?: number;
    disallowedCountries?: string;
    domain?: string;
    email?: string;
    folderPermissionsGroupsOnly?: boolean;
    hipaa?: boolean;
    icon128?: ImageEntity;
    icon16?: ImageEntity;
    icon32?: ImageEntity;
    icon48?: ImageEntity;
    immutableFilesSetAt?: Date;
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
    ldapPort?: number;
    ldapSecure?: boolean;
    ldapType?: string;
    ldapUserAction?: string;
    ldapUserIncludeGroups?: string;
    ldapUsername?: string;
    ldapUsernameField?: string;
    loginHelpText?: string;
    logo?: ImageEntity;
    maxPriorPasswords?: number;
    mobileApp?: boolean;
    mobileAppSessionIpPinning?: boolean;
    mobileAppSessionLifetime?: number;
    name?: string;
    nextBillingAmount?: number;
    nextBillingDate?: string;
    nonSsoGroupsAllowed?: boolean;
    nonSsoUsersAllowed?: boolean;
    officeIntegrationAvailable?: boolean;
    oncehubLink?: string;
    optOutGlobal?: boolean;
    overageNotifiedAt?: Date;
    overageNotify?: boolean;
    overdue?: boolean;
    passwordMinLength?: number;
    passwordRequireLetter?: boolean;
    passwordRequireMixed?: boolean;
    passwordRequireNumber?: boolean;
    passwordRequireSpecial?: boolean;
    passwordRequireUnbreached?: boolean;
    passwordRequirementsApplyToBundles?: boolean;
    passwordValidityDays?: number;
    phone?: string;
    replyToEmail?: string;
    require2fa?: boolean;
    require2faStopTime?: Date;
    require2faUserType?: SiteEntityRequire2faUserTypeEnum;
    session?: SessionEntity;
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
    smtpPort?: number;
    smtpUsername?: string;
    sslRequired?: boolean;
    subdomain?: string;
    switchToPlanDate?: Date;
    tlsDisabled?: boolean;
    trialDaysLeft?: number;
    trialUntil?: Date;
    updatedAt?: Date;
    useProvidedModifiedAt?: boolean;
    user?: UserEntity;
    userLockout?: boolean;
    userLockoutLockPeriod?: number;
    userLockoutTries?: number;
    userLockoutWithin?: number;
    userRequestsEnabled?: boolean;
    welcomeCustomText?: string;
    welcomeEmailCc?: string;
    welcomeEmailEnabled?: boolean;
    welcomeScreen?: SiteEntityWelcomeScreenEnum;
    windowsModeFtp?: boolean;
}
