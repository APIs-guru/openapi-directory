import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSavedRevisionsUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class ListSavedRevisionsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingGetRequest extends SpeakeasyBase {
    queryParams: ListSavedRevisionsUsingGetQueryParams;
}
export declare class ListSavedRevisionsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSavedRevisionsUsingGet200ApplicationJsonObject?: ListSavedRevisionsUsingGet200ApplicationJson;
    listSavedRevisionsUsingGet400ApplicationJsonObject?: ListSavedRevisionsUsingGet400ApplicationJson;
    listSavedRevisionsUsingGet401ApplicationJsonObject?: ListSavedRevisionsUsingGet401ApplicationJson;
    listSavedRevisionsUsingGet500ApplicationJsonObject?: ListSavedRevisionsUsingGet500ApplicationJson;
}
