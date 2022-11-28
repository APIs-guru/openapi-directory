import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleLambdaFunctionFailedCauseEnum } from "./schedulelambdafunctionfailedcauseenum";
/**
 * Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.
**/
export declare class ScheduleLambdaFunctionFailedEventAttributes extends SpeakeasyBase {
    cause: ScheduleLambdaFunctionFailedCauseEnum;
    decisionTaskCompletedEventId: number;
    id: string;
    name: string;
}
