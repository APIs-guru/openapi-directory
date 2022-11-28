import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * User information
**/
export declare class GroupUser extends SpeakeasyBase {
    displayName: string;
    email: string;
    id: number;
    isMember: boolean;
    login: string;
    userInfo: UserInfo;
}
