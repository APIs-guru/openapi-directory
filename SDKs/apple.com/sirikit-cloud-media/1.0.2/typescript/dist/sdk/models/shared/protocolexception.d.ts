import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolExceptionReasonEnum } from "./protocolexceptionreasonenum";
export declare class ProtocolException extends SpeakeasyBase {
    code?: number;
    methodIndex?: number;
    methodName?: string;
    reason: ProtocolExceptionReasonEnum;
    retryWithDelay?: number;
    trace?: string[];
}
