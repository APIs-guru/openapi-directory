import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolSflowGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSflowGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSflowGetConfigPathParams;
}
export declare class ProtocolSflowGetConfigResponse extends SpeakeasyBase {
    configSflow?: shared.ConfigSflow;
    contentType: string;
    statusCode: number;
}
