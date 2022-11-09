import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityStateEnum } from "./entitystateenum";
/**
 * The representation of an Amazon WorkMail group.
**/
export declare class Group extends SpeakeasyBase {
    disabledDate?: Date;
    email?: string;
    enabledDate?: Date;
    id?: string;
    name?: string;
    state?: EntityStateEnum;
}
