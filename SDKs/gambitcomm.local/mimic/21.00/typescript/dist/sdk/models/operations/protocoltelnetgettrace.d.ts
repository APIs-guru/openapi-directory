import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolTelnetGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetGetTracePathParams;
}
export declare class ProtocolTelnetGetTraceResponse extends SpeakeasyBase {
    configTelnet?: shared.ConfigTelnet;
    contentType: string;
    statusCode: number;
}
