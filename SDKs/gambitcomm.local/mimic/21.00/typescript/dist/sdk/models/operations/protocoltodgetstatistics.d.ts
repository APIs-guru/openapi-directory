import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTodGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTodGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolTodGetStatisticsPathParams;
}
export declare class ProtocolTodGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTodGetStatistics200ApplicationJsonInt32Integers?: number[];
}
