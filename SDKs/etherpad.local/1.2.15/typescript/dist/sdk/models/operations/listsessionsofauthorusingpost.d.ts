import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSessionsOfAuthorUsingPostQueryParams extends SpeakeasyBase {
    authorId?: string;
}
export declare class ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions extends SpeakeasyBase {
    authorId?: string;
    groupId?: string;
    id?: string;
    validUntil?: number;
}
export declare class ListSessionsOfAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
    sessions?: ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions[];
}
export declare class ListSessionsOfAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListSessionsOfAuthorUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSessionsOfAuthorUsingPostRequest extends SpeakeasyBase {
    queryParams: ListSessionsOfAuthorUsingPostQueryParams;
}
export declare class ListSessionsOfAuthorUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSessionsOfAuthorUsingPost200ApplicationJsonObject?: ListSessionsOfAuthorUsingPost200ApplicationJson;
    listSessionsOfAuthorUsingPost400ApplicationJsonObject?: ListSessionsOfAuthorUsingPost400ApplicationJson;
    listSessionsOfAuthorUsingPost401ApplicationJsonObject?: ListSessionsOfAuthorUsingPost401ApplicationJson;
    listSessionsOfAuthorUsingPost500ApplicationJsonObject?: ListSessionsOfAuthorUsingPost500ApplicationJson;
}
