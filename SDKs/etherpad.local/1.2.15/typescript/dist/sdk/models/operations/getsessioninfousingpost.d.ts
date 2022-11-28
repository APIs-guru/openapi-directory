import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSessionInfoUsingPostQueryParams extends SpeakeasyBase {
    sessionId?: string;
}
export declare class GetSessionInfoUsingPost200ApplicationJsonDataInfo extends SpeakeasyBase {
    authorId?: string;
    groupId?: string;
    id?: string;
    validUntil?: number;
}
export declare class GetSessionInfoUsingPost200ApplicationJsonData extends SpeakeasyBase {
    info?: GetSessionInfoUsingPost200ApplicationJsonDataInfo;
}
export declare class GetSessionInfoUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetSessionInfoUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetSessionInfoUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingPostRequest extends SpeakeasyBase {
    queryParams: GetSessionInfoUsingPostQueryParams;
}
export declare class GetSessionInfoUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSessionInfoUsingPost200ApplicationJsonObject?: GetSessionInfoUsingPost200ApplicationJson;
    getSessionInfoUsingPost400ApplicationJsonObject?: GetSessionInfoUsingPost400ApplicationJson;
    getSessionInfoUsingPost401ApplicationJsonObject?: GetSessionInfoUsingPost401ApplicationJson;
    getSessionInfoUsingPost500ApplicationJsonObject?: GetSessionInfoUsingPost500ApplicationJson;
}
