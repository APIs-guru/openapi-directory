import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSshGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSshGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolSshGetStatisticsPathParams;
}
export declare class ProtocolSshGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSshGetStatistics200ApplicationJsonInt32Integers?: number[];
}
