import { SpeakeasyBase } from "../../../internal/utils";
import { KeyStateEnum } from "./keystateenum";
export declare class ScheduleKeyDeletionResponse extends SpeakeasyBase {
    deletionDate?: Date;
    keyId?: string;
    keyState?: KeyStateEnum;
    pendingWindowInDays?: number;
}
