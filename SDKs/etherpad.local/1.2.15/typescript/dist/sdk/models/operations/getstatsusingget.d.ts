import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStatsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetStatsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetStatsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetStatsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetStatsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStatsUsingGet200ApplicationJsonObject?: GetStatsUsingGet200ApplicationJson;
    getStatsUsingGet400ApplicationJsonObject?: GetStatsUsingGet400ApplicationJson;
    getStatsUsingGet401ApplicationJsonObject?: GetStatsUsingGet401ApplicationJson;
    getStatsUsingGet500ApplicationJsonObject?: GetStatsUsingGet500ApplicationJson;
}
