import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolProxyGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolProxyGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyGetTracePathParams;
}
export declare class ProtocolProxyGetTraceResponse extends SpeakeasyBase {
    configProxy?: shared.ConfigProxy;
    contentType: string;
    statusCode: number;
}
