import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolProxyGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolProxyGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyGetStatisticsPathParams;
}
export declare class ProtocolProxyGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxyGetStatistics200ApplicationJsonInt32Integers?: number[];
}
