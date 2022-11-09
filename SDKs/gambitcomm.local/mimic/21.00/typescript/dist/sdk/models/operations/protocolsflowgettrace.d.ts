import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolSflowGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSflowGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolSflowGetTracePathParams;
}
export declare class ProtocolSflowGetTraceResponse extends SpeakeasyBase {
    configSflow?: shared.ConfigSflow;
    contentType: string;
    statusCode: number;
}
