import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPadsOfAuthorUsingPostQueryParams extends SpeakeasyBase {
    authorId?: string;
}
export declare class ListPadsOfAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListPadsOfAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListPadsOfAuthorUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPostRequest extends SpeakeasyBase {
    queryParams: ListPadsOfAuthorUsingPostQueryParams;
}
export declare class ListPadsOfAuthorUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPadsOfAuthorUsingPost200ApplicationJsonObject?: ListPadsOfAuthorUsingPost200ApplicationJson;
    listPadsOfAuthorUsingPost400ApplicationJsonObject?: ListPadsOfAuthorUsingPost400ApplicationJson;
    listPadsOfAuthorUsingPost401ApplicationJsonObject?: ListPadsOfAuthorUsingPost401ApplicationJson;
    listPadsOfAuthorUsingPost500ApplicationJsonObject?: ListPadsOfAuthorUsingPost500ApplicationJson;
}
