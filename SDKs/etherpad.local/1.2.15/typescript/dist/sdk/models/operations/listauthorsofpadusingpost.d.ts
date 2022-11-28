import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAuthorsOfPadUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class ListAuthorsOfPadUsingPost200ApplicationJsonData extends SpeakeasyBase {
    authorIDs?: string[];
}
export declare class ListAuthorsOfPadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAuthorsOfPadUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListAuthorsOfPadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingPostRequest extends SpeakeasyBase {
    queryParams: ListAuthorsOfPadUsingPostQueryParams;
}
export declare class ListAuthorsOfPadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAuthorsOfPadUsingPost200ApplicationJsonObject?: ListAuthorsOfPadUsingPost200ApplicationJson;
    listAuthorsOfPadUsingPost400ApplicationJsonObject?: ListAuthorsOfPadUsingPost400ApplicationJson;
    listAuthorsOfPadUsingPost401ApplicationJsonObject?: ListAuthorsOfPadUsingPost401ApplicationJson;
    listAuthorsOfPadUsingPost500ApplicationJsonObject?: ListAuthorsOfPadUsingPost500ApplicationJson;
}
