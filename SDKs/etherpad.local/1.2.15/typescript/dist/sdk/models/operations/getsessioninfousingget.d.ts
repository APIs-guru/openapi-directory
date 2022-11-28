import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSessionInfoUsingGetQueryParams extends SpeakeasyBase {
    sessionId?: string;
}
export declare class GetSessionInfoUsingGet200ApplicationJsonDataInfo extends SpeakeasyBase {
    authorId?: string;
    groupId?: string;
    id?: string;
    validUntil?: number;
}
export declare class GetSessionInfoUsingGet200ApplicationJsonData extends SpeakeasyBase {
    info?: GetSessionInfoUsingGet200ApplicationJsonDataInfo;
}
export declare class GetSessionInfoUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetSessionInfoUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetSessionInfoUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingGetRequest extends SpeakeasyBase {
    queryParams: GetSessionInfoUsingGetQueryParams;
}
export declare class GetSessionInfoUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSessionInfoUsingGet200ApplicationJsonObject?: GetSessionInfoUsingGet200ApplicationJson;
    getSessionInfoUsingGet400ApplicationJsonObject?: GetSessionInfoUsingGet400ApplicationJson;
    getSessionInfoUsingGet401ApplicationJsonObject?: GetSessionInfoUsingGet401ApplicationJson;
    getSessionInfoUsingGet500ApplicationJsonObject?: GetSessionInfoUsingGet500ApplicationJson;
}
