import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolIpmiGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolIpmiGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolIpmiGetTracePathParams;
}
export declare class ProtocolIpmiGetTraceResponse extends SpeakeasyBase {
    configIpmi?: shared.ConfigIpmi;
    contentType: string;
    statusCode: number;
}
