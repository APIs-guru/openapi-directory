import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTelnetServerGetConnectionsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetServerGetConnectionsRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetServerGetConnectionsPathParams;
}
export declare class ProtocolTelnetServerGetConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetServerGetConnections200ApplicationJsonInt32Integers?: number[];
}
