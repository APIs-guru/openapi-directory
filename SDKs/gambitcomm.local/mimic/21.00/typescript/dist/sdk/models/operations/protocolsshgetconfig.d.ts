import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolSshGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSshGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSshGetConfigPathParams;
}
export declare class ProtocolSshGetConfigResponse extends SpeakeasyBase {
    configSsh?: shared.ConfigSsh;
    contentType: string;
    statusCode: number;
}
