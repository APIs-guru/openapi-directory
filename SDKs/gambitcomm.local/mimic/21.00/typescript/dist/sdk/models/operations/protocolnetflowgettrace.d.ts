import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolNetflowGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolNetflowGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowGetTracePathParams;
}
export declare class ProtocolNetflowGetTraceResponse extends SpeakeasyBase {
    configNetflow?: shared.ConfigNetflow;
    contentType: string;
    statusCode: number;
}
