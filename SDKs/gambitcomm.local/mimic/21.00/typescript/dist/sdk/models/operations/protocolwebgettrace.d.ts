import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolWebGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolWebGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolWebGetTracePathParams;
}
export declare class ProtocolWebGetTraceResponse extends SpeakeasyBase {
    configWeb?: shared.ConfigWeb;
    contentType: string;
    statusCode: number;
}
