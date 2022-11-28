import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSessionUsingPostQueryParams extends SpeakeasyBase {
    authorId?: string;
    groupId?: string;
    validUntil?: string;
}
export declare class CreateSessionUsingPost200ApplicationJsonData extends SpeakeasyBase {
    sessionId?: string;
}
export declare class CreateSessionUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateSessionUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateSessionUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateSessionUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateSessionUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateSessionUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateSessionUsingPostQueryParams;
}
export declare class CreateSessionUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createSessionUsingPost200ApplicationJsonObject?: CreateSessionUsingPost200ApplicationJson;
    createSessionUsingPost400ApplicationJsonObject?: CreateSessionUsingPost400ApplicationJson;
    createSessionUsingPost401ApplicationJsonObject?: CreateSessionUsingPost401ApplicationJson;
    createSessionUsingPost500ApplicationJsonObject?: CreateSessionUsingPost500ApplicationJson;
}
