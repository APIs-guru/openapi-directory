import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSessionsOfAuthorUsingGetQueryParams extends SpeakeasyBase {
    authorId?: string;
}
export declare class ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions extends SpeakeasyBase {
    authorId?: string;
    groupId?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
    sessions?: ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions[];
}
export declare class ListSessionsOfAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfAuthorUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingGetRequest extends SpeakeasyBase {
    queryParams: ListSessionsOfAuthorUsingGetQueryParams;
}
export declare class ListSessionsOfAuthorUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSessionsOfAuthorUsingGet200ApplicationJsonObject?: ListSessionsOfAuthorUsingGet200ApplicationJson;
    listSessionsOfAuthorUsingGet400ApplicationJsonObject?: ListSessionsOfAuthorUsingGet400ApplicationJson;
    listSessionsOfAuthorUsingGet401ApplicationJsonObject?: ListSessionsOfAuthorUsingGet401ApplicationJson;
    listSessionsOfAuthorUsingGet500ApplicationJsonObject?: ListSessionsOfAuthorUsingGet500ApplicationJson;
}
