import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolWebGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolWebGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolWebGetStatisticsPathParams;
}
export declare class ProtocolWebGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebGetStatistics200ApplicationJsonInt32Integers?: number[];
}
