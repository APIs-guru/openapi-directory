import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTftpGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpGetStatisticsPathParams;
}
export declare class ProtocolTftpGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpGetStatistics200ApplicationJsonInt32Integers?: number[];
}
