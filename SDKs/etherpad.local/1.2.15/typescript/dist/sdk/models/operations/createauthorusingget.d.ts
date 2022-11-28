import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAuthorUsingGetQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class CreateAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
    authorId?: string;
}
export declare class CreateAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateAuthorUsingGetQueryParams;
}
export declare class CreateAuthorUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createAuthorUsingGet200ApplicationJsonObject?: CreateAuthorUsingGet200ApplicationJson;
    createAuthorUsingGet400ApplicationJsonObject?: CreateAuthorUsingGet400ApplicationJson;
    createAuthorUsingGet401ApplicationJsonObject?: CreateAuthorUsingGet401ApplicationJson;
    createAuthorUsingGet500ApplicationJsonObject?: CreateAuthorUsingGet500ApplicationJson;
}
