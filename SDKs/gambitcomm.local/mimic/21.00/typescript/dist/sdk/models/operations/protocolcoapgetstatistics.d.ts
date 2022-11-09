import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolCoapGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolCoapGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolCoapGetStatisticsPathParams;
}
export declare class ProtocolCoapGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolCoapGetStatistics200ApplicationJsonInt32Integers?: number[];
}
