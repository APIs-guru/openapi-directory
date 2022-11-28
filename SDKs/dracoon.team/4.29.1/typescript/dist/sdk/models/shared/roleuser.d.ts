import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * User information
**/
export declare class RoleUser extends SpeakeasyBase {
    displayName: string;
    id: number;
    isMember: boolean;
    userInfo: UserInfo;
}
