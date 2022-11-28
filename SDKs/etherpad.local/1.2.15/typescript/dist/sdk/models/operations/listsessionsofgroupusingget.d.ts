import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSessionsOfGroupUsingGetQueryParams extends SpeakeasyBase {
    groupId?: string;
}
export declare class ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions extends SpeakeasyBase {
    authorId?: string;
    groupId?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfGroupUsingGet200ApplicationJsonData extends SpeakeasyBase {
    sessions?: ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions[];
}
export declare class ListSessionsOfGroupUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfGroupUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingGetRequest extends SpeakeasyBase {
    queryParams: ListSessionsOfGroupUsingGetQueryParams;
}
export declare class ListSessionsOfGroupUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSessionsOfGroupUsingGet200ApplicationJsonObject?: ListSessionsOfGroupUsingGet200ApplicationJson;
    listSessionsOfGroupUsingGet400ApplicationJsonObject?: ListSessionsOfGroupUsingGet400ApplicationJson;
    listSessionsOfGroupUsingGet401ApplicationJsonObject?: ListSessionsOfGroupUsingGet401ApplicationJson;
    listSessionsOfGroupUsingGet500ApplicationJsonObject?: ListSessionsOfGroupUsingGet500ApplicationJson;
}
