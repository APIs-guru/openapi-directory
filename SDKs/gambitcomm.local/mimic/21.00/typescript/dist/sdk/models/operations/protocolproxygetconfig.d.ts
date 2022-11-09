import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolProxyGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolProxyGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyGetConfigPathParams;
}
export declare class ProtocolProxyGetConfigResponse extends SpeakeasyBase {
    configProxy?: shared.ConfigProxy;
    contentType: string;
    statusCode: number;
}
