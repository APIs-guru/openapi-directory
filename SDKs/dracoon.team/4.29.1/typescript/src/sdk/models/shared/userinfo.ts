import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserInfoUserTypeEnum {
    System = "system",
    Internal = "internal",
    External = "external",
    Deleted = "deleted"
}


// UserInfo
/** 
 * User information
**/
export class UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatarUuid" })
  avatarUuid: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName: string;

  @SpeakeasyMetadata({ data: "json, name=userType" })
  userType: UserInfoUserTypeEnum;
}
