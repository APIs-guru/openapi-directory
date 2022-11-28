import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPadsOfAuthorUsingGetQueryParams extends SpeakeasyBase {
    authorId?: string;
}
export declare class ListPadsOfAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListPadsOfAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListPadsOfAuthorUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGetRequest extends SpeakeasyBase {
    queryParams: ListPadsOfAuthorUsingGetQueryParams;
}
export declare class ListPadsOfAuthorUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPadsOfAuthorUsingGet200ApplicationJsonObject?: ListPadsOfAuthorUsingGet200ApplicationJson;
    listPadsOfAuthorUsingGet400ApplicationJsonObject?: ListPadsOfAuthorUsingGet400ApplicationJson;
    listPadsOfAuthorUsingGet401ApplicationJsonObject?: ListPadsOfAuthorUsingGet401ApplicationJson;
    listPadsOfAuthorUsingGet500ApplicationJsonObject?: ListPadsOfAuthorUsingGet500ApplicationJson;
}
