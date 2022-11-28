import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSessionsOfGroupUsingPostQueryParams extends SpeakeasyBase {
    groupId?: string;
}
export declare class ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions extends SpeakeasyBase {
    authorId?: string;
    groupId?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfGroupUsingPost200ApplicationJsonData extends SpeakeasyBase {
    sessions?: ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions[];
}
export declare class ListSessionsOfGroupUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfGroupUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfGroupUsingPostRequest extends SpeakeasyBase {
    queryParams: ListSessionsOfGroupUsingPostQueryParams;
}
export declare class ListSessionsOfGroupUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSessionsOfGroupUsingPost200ApplicationJsonObject?: ListSessionsOfGroupUsingPost200ApplicationJson;
    listSessionsOfGroupUsingPost400ApplicationJsonObject?: ListSessionsOfGroupUsingPost400ApplicationJson;
    listSessionsOfGroupUsingPost401ApplicationJsonObject?: ListSessionsOfGroupUsingPost401ApplicationJson;
    listSessionsOfGroupUsingPost500ApplicationJsonObject?: ListSessionsOfGroupUsingPost500ApplicationJson;
}
