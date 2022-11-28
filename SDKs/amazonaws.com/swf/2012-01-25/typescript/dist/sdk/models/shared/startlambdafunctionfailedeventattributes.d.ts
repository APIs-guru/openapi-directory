import { SpeakeasyBase } from "../../../internal/utils";
import { StartLambdaFunctionFailedCauseEnum } from "./startlambdafunctionfailedcauseenum";
/**
 * Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.
**/
export declare class StartLambdaFunctionFailedEventAttributes extends SpeakeasyBase {
    cause?: StartLambdaFunctionFailedCauseEnum;
    message?: string;
    scheduledEventId?: number;
}
