import { SpeakeasyBase } from "../../../internal/utils";
import { EntityStateEnum } from "./entitystateenum";
import { UserRoleEnum } from "./userroleenum";
/**
 * The representation of an Amazon WorkMail user.
**/
export declare class User extends SpeakeasyBase {
    disabledDate?: Date;
    displayName?: string;
    email?: string;
    enabledDate?: Date;
    id?: string;
    name?: string;
    state?: EntityStateEnum;
    userRole?: UserRoleEnum;
}
