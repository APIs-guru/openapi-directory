import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserInfoUserTypeEnum {
    System = "system",
    Internal = "internal",
    External = "external",
    Deleted = "deleted"
}
/**
 * User information
**/
export declare class UserInfo extends SpeakeasyBase {
    avatarUuid: string;
    displayName?: string;
    email?: string;
    firstName: string;
    id: number;
    lastName: string;
    title?: string;
    userName: string;
    userType: UserInfoUserTypeEnum;
}
