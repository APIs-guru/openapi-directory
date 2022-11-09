import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserAccountTypeEnum {
    DeviceAccount = "deviceAccount"
,    UserAccount = "userAccount"
}

export enum UserManagementTypeEnum {
    GoogleManaged = "googleManaged"
,    EmmManaged = "emmManaged"
}


// User
/** 
 * A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play. 
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIdentifier" })
  accountIdentifier?: string;

  @Metadata({ data: "json, name=accountType" })
  accountType?: UserAccountTypeEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=managementType" })
  managementType?: UserManagementTypeEnum;

  @Metadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;
}
