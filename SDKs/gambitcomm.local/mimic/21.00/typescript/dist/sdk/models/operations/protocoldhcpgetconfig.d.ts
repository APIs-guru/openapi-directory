import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolDhcpGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolDhcpGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolDhcpGetConfigPathParams;
}
export declare class ProtocolDhcpGetConfigResponse extends SpeakeasyBase {
    configDhcp?: shared.ConfigDhcp;
    contentType: string;
    statusCode: number;
}
