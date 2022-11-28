import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionMetrics } from "./executionmetrics";
export declare class PlayMediaIntentHandlingHandleInvocationResponse extends SpeakeasyBase {
    debug?: string;
    method: string;
    metrics?: ExecutionMetrics;
    result: Map<string, any>;
}
