import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolIpmiGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolIpmiGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolIpmiGetStatisticsPathParams;
}
export declare class ProtocolIpmiGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolIpmiGetStatistics200ApplicationJsonInt32Integers?: number[];
}
