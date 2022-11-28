import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionTimeoutTypeEnum } from "./lambdafunctiontimeouttypeenum";
/**
 * Provides details of the <code>LambdaFunctionTimedOut</code> event.
**/
export declare class LambdaFunctionTimedOutEventAttributes extends SpeakeasyBase {
    scheduledEventId: number;
    startedEventId: number;
    timeoutType?: LambdaFunctionTimeoutTypeEnum;
}
