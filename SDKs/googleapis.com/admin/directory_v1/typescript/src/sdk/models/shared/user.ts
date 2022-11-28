import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserName } from "./username";



// UserInput
/** 
 * The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
**/
export class UserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses" })
  addresses?: any;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=changePasswordAtNextLogin" })
  changePasswordAtNextLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customSchemas" })
  customSchemas?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: any;

  @SpeakeasyMetadata({ data: "json, name=externalIds" })
  externalIds?: any;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: any;

  @SpeakeasyMetadata({ data: "json, name=hashFunction" })
  hashFunction?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ims" })
  ims?: any;

  @SpeakeasyMetadata({ data: "json, name=includeInGlobalAddressList" })
  includeInGlobalAddressList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipWhitelisted" })
  ipWhitelisted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: any;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: any;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: UserName;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: any;

  @SpeakeasyMetadata({ data: "json, name=orgUnitPath" })
  orgUnitPath?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations" })
  organizations?: any;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=phones" })
  phones?: any;

  @SpeakeasyMetadata({ data: "json, name=posixAccounts" })
  posixAccounts?: any;

  @SpeakeasyMetadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=recoveryEmail" })
  recoveryEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=recoveryPhone" })
  recoveryPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=relations" })
  relations?: any;

  @SpeakeasyMetadata({ data: "json, name=sshPublicKeys" })
  sshPublicKeys?: any;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=websites" })
  websites?: any;
}


// User
/** 
 * The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses" })
  addresses?: any;

  @SpeakeasyMetadata({ data: "json, name=agreedToTerms" })
  agreedToTerms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=aliases" })
  aliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=changePasswordAtNextLogin" })
  changePasswordAtNextLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=customSchemas" })
  customSchemas?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=deletionTime" })
  deletionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: any;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=externalIds" })
  externalIds?: any;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: any;

  @SpeakeasyMetadata({ data: "json, name=hashFunction" })
  hashFunction?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ims" })
  ims?: any;

  @SpeakeasyMetadata({ data: "json, name=includeInGlobalAddressList" })
  includeInGlobalAddressList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipWhitelisted" })
  ipWhitelisted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isAdmin" })
  isAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDelegatedAdmin" })
  isDelegatedAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isEnforcedIn2Sv" })
  isEnforcedIn2Sv?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isEnrolledIn2Sv" })
  isEnrolledIn2Sv?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isMailboxSetup" })
  isMailboxSetup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: any;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: any;

  @SpeakeasyMetadata({ data: "json, name=lastLoginTime" })
  lastLoginTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: UserName;

  @SpeakeasyMetadata({ data: "json, name=nonEditableAliases" })
  nonEditableAliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: any;

  @SpeakeasyMetadata({ data: "json, name=orgUnitPath" })
  orgUnitPath?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations" })
  organizations?: any;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=phones" })
  phones?: any;

  @SpeakeasyMetadata({ data: "json, name=posixAccounts" })
  posixAccounts?: any;

  @SpeakeasyMetadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=recoveryEmail" })
  recoveryEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=recoveryPhone" })
  recoveryPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=relations" })
  relations?: any;

  @SpeakeasyMetadata({ data: "json, name=sshPublicKeys" })
  sshPublicKeys?: any;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=suspensionReason" })
  suspensionReason?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailPhotoEtag" })
  thumbnailPhotoEtag?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailPhotoUrl" })
  thumbnailPhotoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=websites" })
  websites?: any;
}
