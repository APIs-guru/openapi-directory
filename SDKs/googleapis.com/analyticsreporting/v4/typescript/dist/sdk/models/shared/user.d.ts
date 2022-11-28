import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserTypeEnum {
    UserIdTypeUnspecified = "USER_ID_TYPE_UNSPECIFIED",
    UserId = "USER_ID",
    ClientId = "CLIENT_ID"
}
/**
 * Contains information to identify a particular user uniquely.
**/
export declare class User extends SpeakeasyBase {
    type?: UserTypeEnum;
    userId?: string;
}
