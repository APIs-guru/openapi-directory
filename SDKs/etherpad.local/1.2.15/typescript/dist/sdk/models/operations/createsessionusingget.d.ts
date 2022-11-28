import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSessionUsingGetQueryParams extends SpeakeasyBase {
    authorId?: string;
    groupId?: string;
    validUntil?: string;
}
export declare class CreateSessionUsingGet200ApplicationJsonData extends SpeakeasyBase {
    sessionId?: string;
}
export declare class CreateSessionUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateSessionUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateSessionUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateSessionUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateSessionUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateSessionUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateSessionUsingGetQueryParams;
}
export declare class CreateSessionUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createSessionUsingGet200ApplicationJsonObject?: CreateSessionUsingGet200ApplicationJson;
    createSessionUsingGet400ApplicationJsonObject?: CreateSessionUsingGet400ApplicationJson;
    createSessionUsingGet401ApplicationJsonObject?: CreateSessionUsingGet401ApplicationJson;
    createSessionUsingGet500ApplicationJsonObject?: CreateSessionUsingGet500ApplicationJson;
}
