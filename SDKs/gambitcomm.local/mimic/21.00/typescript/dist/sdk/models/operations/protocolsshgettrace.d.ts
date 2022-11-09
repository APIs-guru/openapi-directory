import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolSshGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSshGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolSshGetTracePathParams;
}
export declare class ProtocolSshGetTraceResponse extends SpeakeasyBase {
    configSsh?: shared.ConfigSsh;
    contentType: string;
    statusCode: number;
}
