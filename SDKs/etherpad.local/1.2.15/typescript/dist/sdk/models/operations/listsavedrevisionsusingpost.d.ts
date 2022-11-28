import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSavedRevisionsUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class ListSavedRevisionsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingPostRequest extends SpeakeasyBase {
    queryParams: ListSavedRevisionsUsingPostQueryParams;
}
export declare class ListSavedRevisionsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSavedRevisionsUsingPost200ApplicationJsonObject?: ListSavedRevisionsUsingPost200ApplicationJson;
    listSavedRevisionsUsingPost400ApplicationJsonObject?: ListSavedRevisionsUsingPost400ApplicationJson;
    listSavedRevisionsUsingPost401ApplicationJsonObject?: ListSavedRevisionsUsingPost401ApplicationJson;
    listSavedRevisionsUsingPost500ApplicationJsonObject?: ListSavedRevisionsUsingPost500ApplicationJson;
}
