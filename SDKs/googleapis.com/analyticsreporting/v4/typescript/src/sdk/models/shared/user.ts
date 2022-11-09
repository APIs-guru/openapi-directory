import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserTypeEnum {
    UserIdTypeUnspecified = "USER_ID_TYPE_UNSPECIFIED"
,    UserId = "USER_ID"
,    ClientId = "CLIENT_ID"
}


// User
/** 
 * Contains information to identify a particular user uniquely.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: UserTypeEnum;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
