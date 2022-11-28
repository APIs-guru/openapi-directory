import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSflowGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSflowGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolSflowGetStatisticsPathParams;
}
export declare class ProtocolSflowGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSflowGetStatistics200ApplicationJsonInt32Integers?: number[];
}
