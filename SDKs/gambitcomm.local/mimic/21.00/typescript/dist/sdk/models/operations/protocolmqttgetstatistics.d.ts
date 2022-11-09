import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttGetStatisticsPathParams;
}
export declare class ProtocolMqttGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttGetStatistics200ApplicationJsonInt32Integers?: number[];
}
