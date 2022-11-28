import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAuthorNameUsingPostQueryParams extends SpeakeasyBase {
    authorId?: string;
}
export declare class GetAuthorNameUsingPost200ApplicationJsonDataInfo extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class GetAuthorNameUsingPost200ApplicationJsonData extends SpeakeasyBase {
    info?: GetAuthorNameUsingPost200ApplicationJsonDataInfo;
}
export declare class GetAuthorNameUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetAuthorNameUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetAuthorNameUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingPostRequest extends SpeakeasyBase {
    queryParams: GetAuthorNameUsingPostQueryParams;
}
export declare class GetAuthorNameUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAuthorNameUsingPost200ApplicationJsonObject?: GetAuthorNameUsingPost200ApplicationJson;
    getAuthorNameUsingPost400ApplicationJsonObject?: GetAuthorNameUsingPost400ApplicationJson;
    getAuthorNameUsingPost401ApplicationJsonObject?: GetAuthorNameUsingPost401ApplicationJson;
    getAuthorNameUsingPost500ApplicationJsonObject?: GetAuthorNameUsingPost500ApplicationJson;
}
