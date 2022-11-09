import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTelnetGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetGetStatisticsPathParams;
}
export declare class ProtocolTelnetGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetGetStatistics200ApplicationJsonInt32Integers?: number[];
}
