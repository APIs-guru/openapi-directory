import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmptcpGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmptcpGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpGetStatisticsPathParams;
}
export declare class ProtocolSnmptcpGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmptcpGetStatistics200ApplicationJsonInt32Integers?: number[];
}
