import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolException } from "./protocolexception";
import { ExecutionMetrics } from "./executionmetrics";
export declare class ProtocolExceptionInvocationResponse extends SpeakeasyBase {
    debug?: string;
    exception: ProtocolException;
    method: string;
    metrics?: ExecutionMetrics;
    result: Map<string, any>;
}
