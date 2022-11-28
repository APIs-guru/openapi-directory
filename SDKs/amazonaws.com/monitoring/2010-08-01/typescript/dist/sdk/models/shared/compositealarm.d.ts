import { SpeakeasyBase } from "../../../internal/utils";
import { StateValueEnum } from "./statevalueenum";
/**
 * The details about a composite alarm.
**/
export declare class CompositeAlarm extends SpeakeasyBase {
    actionsEnabled?: boolean;
    alarmActions?: string[];
    alarmArn?: string;
    alarmConfigurationUpdatedTimestamp?: Date;
    alarmDescription?: string;
    alarmName?: string;
    alarmRule?: string;
    insufficientDataActions?: string[];
    okActions?: string[];
    stateReason?: string;
    stateReasonData?: string;
    stateUpdatedTimestamp?: Date;
    stateValue?: StateValueEnum;
}
