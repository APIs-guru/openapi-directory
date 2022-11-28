import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserTypeEnum {
    UserIdTypeUnspecified = "USER_ID_TYPE_UNSPECIFIED",
    UserId = "USER_ID",
    ClientId = "CLIENT_ID"
}


// User
/** 
 * Contains information to identify a particular user uniquely.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
