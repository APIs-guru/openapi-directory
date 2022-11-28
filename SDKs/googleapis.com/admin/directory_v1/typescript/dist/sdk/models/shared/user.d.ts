import { SpeakeasyBase } from "../../../internal/utils";
import { UserName } from "./username";
/**
 * The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
**/
export declare class UserInput extends SpeakeasyBase {
    addresses?: any;
    archived?: boolean;
    changePasswordAtNextLogin?: boolean;
    customSchemas?: Map<string, Map<string, any>>;
    emails?: any;
    externalIds?: any;
    gender?: any;
    hashFunction?: string;
    id?: string;
    ims?: any;
    includeInGlobalAddressList?: boolean;
    ipWhitelisted?: boolean;
    keywords?: any;
    languages?: any;
    locations?: any;
    name?: UserName;
    notes?: any;
    orgUnitPath?: string;
    organizations?: any;
    password?: string;
    phones?: any;
    posixAccounts?: any;
    primaryEmail?: string;
    recoveryEmail?: string;
    recoveryPhone?: string;
    relations?: any;
    sshPublicKeys?: any;
    suspended?: boolean;
    websites?: any;
}
/**
 * The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
**/
export declare class User extends SpeakeasyBase {
    addresses?: any;
    agreedToTerms?: boolean;
    aliases?: string[];
    archived?: boolean;
    changePasswordAtNextLogin?: boolean;
    creationTime?: Date;
    customSchemas?: Map<string, Map<string, any>>;
    customerId?: string;
    deletionTime?: Date;
    emails?: any;
    etag?: string;
    externalIds?: any;
    gender?: any;
    hashFunction?: string;
    id?: string;
    ims?: any;
    includeInGlobalAddressList?: boolean;
    ipWhitelisted?: boolean;
    isAdmin?: boolean;
    isDelegatedAdmin?: boolean;
    isEnforcedIn2Sv?: boolean;
    isEnrolledIn2Sv?: boolean;
    isMailboxSetup?: boolean;
    keywords?: any;
    kind?: string;
    languages?: any;
    lastLoginTime?: Date;
    locations?: any;
    name?: UserName;
    nonEditableAliases?: string[];
    notes?: any;
    orgUnitPath?: string;
    organizations?: any;
    password?: string;
    phones?: any;
    posixAccounts?: any;
    primaryEmail?: string;
    recoveryEmail?: string;
    recoveryPhone?: string;
    relations?: any;
    sshPublicKeys?: any;
    suspended?: boolean;
    suspensionReason?: string;
    thumbnailPhotoEtag?: string;
    thumbnailPhotoUrl?: string;
    websites?: any;
}
