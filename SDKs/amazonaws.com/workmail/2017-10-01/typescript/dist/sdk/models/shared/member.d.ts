import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityStateEnum } from "./entitystateenum";
import { MemberTypeEnum } from "./membertypeenum";
/**
 * The representation of a user or group.
**/
export declare class Member extends SpeakeasyBase {
    disabledDate?: Date;
    enabledDate?: Date;
    id?: string;
    name?: string;
    state?: EntityStateEnum;
    type?: MemberTypeEnum;
}
