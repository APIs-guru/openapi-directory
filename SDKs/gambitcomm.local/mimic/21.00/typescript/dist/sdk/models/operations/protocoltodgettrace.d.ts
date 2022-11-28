import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolTodGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTodGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolTodGetTracePathParams;
}
export declare class ProtocolTodGetTraceResponse extends SpeakeasyBase {
    configTod?: shared.ConfigTod;
    contentType: string;
    statusCode: number;
}
