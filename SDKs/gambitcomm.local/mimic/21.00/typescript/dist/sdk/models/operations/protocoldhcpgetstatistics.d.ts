import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolDhcpGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolDhcpGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolDhcpGetStatisticsPathParams;
}
export declare class ProtocolDhcpGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolDhcpGetStatistics200ApplicationJsonInt32Integers?: number[];
}
