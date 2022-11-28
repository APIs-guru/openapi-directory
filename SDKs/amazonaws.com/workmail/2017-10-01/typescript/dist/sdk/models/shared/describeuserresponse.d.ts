import { SpeakeasyBase } from "../../../internal/utils";
import { EntityStateEnum } from "./entitystateenum";
import { UserRoleEnum } from "./userroleenum";
export declare class DescribeUserResponse extends SpeakeasyBase {
    disabledDate?: Date;
    displayName?: string;
    email?: string;
    enabledDate?: Date;
    name?: string;
    state?: EntityStateEnum;
    userId?: string;
    userRole?: UserRoleEnum;
}
