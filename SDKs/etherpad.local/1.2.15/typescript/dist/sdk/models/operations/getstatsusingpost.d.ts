import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStatsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetStatsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetStatsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetStatsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetStatsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStatsUsingPost200ApplicationJsonObject?: GetStatsUsingPost200ApplicationJson;
    getStatsUsingPost400ApplicationJsonObject?: GetStatsUsingPost400ApplicationJson;
    getStatsUsingPost401ApplicationJsonObject?: GetStatsUsingPost401ApplicationJson;
    getStatsUsingPost500ApplicationJsonObject?: GetStatsUsingPost500ApplicationJson;
}
