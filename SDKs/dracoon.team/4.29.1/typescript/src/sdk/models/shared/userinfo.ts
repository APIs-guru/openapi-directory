import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserInfoUserTypeEnum {
    System = "system"
,    Internal = "internal"
,    External = "external"
,    Deleted = "deleted"
}


// UserInfo
/** 
 * User information
**/
export class UserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatarUuid" })
  avatarUuid: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=userName" })
  userName: string;

  @Metadata({ data: "json, name=userType" })
  userType: UserInfoUserTypeEnum;
}
