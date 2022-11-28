import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolNetflowGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolNetflowGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowGetStatisticsPathParams;
}
export declare class ProtocolNetflowGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowGetStatistics200ApplicationJsonInt32Integers?: number[];
}
