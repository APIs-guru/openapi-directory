import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolCoapGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolCoapGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolCoapGetTracePathParams;
}
export declare class ProtocolCoapGetTraceResponse extends SpeakeasyBase {
    configCoap?: shared.ConfigCoap;
    contentType: string;
    statusCode: number;
}
