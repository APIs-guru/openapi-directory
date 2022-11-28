import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAuthorIfNotExistsForUsingGetQueryParams extends SpeakeasyBase {
    authorMapper?: string;
    name?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData extends SpeakeasyBase {
    authorId?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateAuthorIfNotExistsForUsingGetQueryParams;
}
export declare class CreateAuthorIfNotExistsForUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createAuthorIfNotExistsForUsingGet200ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingGet200ApplicationJson;
    createAuthorIfNotExistsForUsingGet400ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingGet400ApplicationJson;
    createAuthorIfNotExistsForUsingGet401ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingGet401ApplicationJson;
    createAuthorIfNotExistsForUsingGet500ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingGet500ApplicationJson;
}
