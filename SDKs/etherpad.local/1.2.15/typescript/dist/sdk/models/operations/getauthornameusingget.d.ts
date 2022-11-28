import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAuthorNameUsingGetQueryParams extends SpeakeasyBase {
    authorId?: string;
}
export declare class GetAuthorNameUsingGet200ApplicationJsonDataInfo extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class GetAuthorNameUsingGet200ApplicationJsonData extends SpeakeasyBase {
    info?: GetAuthorNameUsingGet200ApplicationJsonDataInfo;
}
export declare class GetAuthorNameUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetAuthorNameUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetAuthorNameUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingGetRequest extends SpeakeasyBase {
    queryParams: GetAuthorNameUsingGetQueryParams;
}
export declare class GetAuthorNameUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAuthorNameUsingGet200ApplicationJsonObject?: GetAuthorNameUsingGet200ApplicationJson;
    getAuthorNameUsingGet400ApplicationJsonObject?: GetAuthorNameUsingGet400ApplicationJson;
    getAuthorNameUsingGet401ApplicationJsonObject?: GetAuthorNameUsingGet401ApplicationJson;
    getAuthorNameUsingGet500ApplicationJsonObject?: GetAuthorNameUsingGet500ApplicationJson;
}
