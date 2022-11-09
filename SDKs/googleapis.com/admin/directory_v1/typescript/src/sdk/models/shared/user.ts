import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserName } from "./username";


// User
/** 
 * The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses" })
  addresses?: any;

  @Metadata({ data: "json, name=agreedToTerms" })
  agreedToTerms?: boolean;

  @Metadata({ data: "json, name=aliases" })
  aliases?: string[];

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=changePasswordAtNextLogin" })
  changePasswordAtNextLogin?: boolean;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=customSchemas" })
  customSchemas?: Map<string, Map<string, any>>;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=deletionTime" })
  deletionTime?: Date;

  @Metadata({ data: "json, name=emails" })
  emails?: any;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=externalIds" })
  externalIds?: any;

  @Metadata({ data: "json, name=gender" })
  gender?: any;

  @Metadata({ data: "json, name=hashFunction" })
  hashFunction?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ims" })
  ims?: any;

  @Metadata({ data: "json, name=includeInGlobalAddressList" })
  includeInGlobalAddressList?: boolean;

  @Metadata({ data: "json, name=ipWhitelisted" })
  ipWhitelisted?: boolean;

  @Metadata({ data: "json, name=isAdmin" })
  isAdmin?: boolean;

  @Metadata({ data: "json, name=isDelegatedAdmin" })
  isDelegatedAdmin?: boolean;

  @Metadata({ data: "json, name=isEnforcedIn2Sv" })
  isEnforcedIn2Sv?: boolean;

  @Metadata({ data: "json, name=isEnrolledIn2Sv" })
  isEnrolledIn2Sv?: boolean;

  @Metadata({ data: "json, name=isMailboxSetup" })
  isMailboxSetup?: boolean;

  @Metadata({ data: "json, name=keywords" })
  keywords?: any;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=languages" })
  languages?: any;

  @Metadata({ data: "json, name=lastLoginTime" })
  lastLoginTime?: Date;

  @Metadata({ data: "json, name=locations" })
  locations?: any;

  @Metadata({ data: "json, name=name" })
  name?: UserName;

  @Metadata({ data: "json, name=nonEditableAliases" })
  nonEditableAliases?: string[];

  @Metadata({ data: "json, name=notes" })
  notes?: any;

  @Metadata({ data: "json, name=orgUnitPath" })
  orgUnitPath?: string;

  @Metadata({ data: "json, name=organizations" })
  organizations?: any;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=phones" })
  phones?: any;

  @Metadata({ data: "json, name=posixAccounts" })
  posixAccounts?: any;

  @Metadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;

  @Metadata({ data: "json, name=recoveryEmail" })
  recoveryEmail?: string;

  @Metadata({ data: "json, name=recoveryPhone" })
  recoveryPhone?: string;

  @Metadata({ data: "json, name=relations" })
  relations?: any;

  @Metadata({ data: "json, name=sshPublicKeys" })
  sshPublicKeys?: any;

  @Metadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @Metadata({ data: "json, name=suspensionReason" })
  suspensionReason?: string;

  @Metadata({ data: "json, name=thumbnailPhotoEtag" })
  thumbnailPhotoEtag?: string;

  @Metadata({ data: "json, name=thumbnailPhotoUrl" })
  thumbnailPhotoUrl?: string;

  @Metadata({ data: "json, name=websites" })
  websites?: any;
}
