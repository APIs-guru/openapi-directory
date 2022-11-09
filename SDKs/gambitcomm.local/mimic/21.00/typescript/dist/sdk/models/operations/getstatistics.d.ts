import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetStatisticsRequest extends SpeakeasyBase {
    pathParams: GetStatisticsPathParams;
}
export declare class GetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStatistics200ApplicationJsonInt32Integers?: number[];
}
