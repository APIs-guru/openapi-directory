import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledActionStateEnum } from "./scheduledactionstateenum";
import { ScheduledActionType } from "./scheduledactiontype";
/**
 * Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>.
**/
export declare class ScheduledAction extends SpeakeasyBase {
    endTime?: Date;
    iamRole?: string;
    nextInvocations?: Date[];
    schedule?: string;
    scheduledActionDescription?: string;
    scheduledActionName?: string;
    startTime?: Date;
    state?: ScheduledActionStateEnum;
    targetAction?: ScheduledActionType;
}
