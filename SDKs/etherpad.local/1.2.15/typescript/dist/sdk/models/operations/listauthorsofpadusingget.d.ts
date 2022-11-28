import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAuthorsOfPadUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class ListAuthorsOfPadUsingGet200ApplicationJsonData extends SpeakeasyBase {
    authorIDs?: string[];
}
export declare class ListAuthorsOfPadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAuthorsOfPadUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGetRequest extends SpeakeasyBase {
    queryParams: ListAuthorsOfPadUsingGetQueryParams;
}
export declare class ListAuthorsOfPadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAuthorsOfPadUsingGet200ApplicationJsonObject?: ListAuthorsOfPadUsingGet200ApplicationJson;
    listAuthorsOfPadUsingGet400ApplicationJsonObject?: ListAuthorsOfPadUsingGet400ApplicationJson;
    listAuthorsOfPadUsingGet401ApplicationJsonObject?: ListAuthorsOfPadUsingGet401ApplicationJson;
    listAuthorsOfPadUsingGet500ApplicationJsonObject?: ListAuthorsOfPadUsingGet500ApplicationJson;
}
