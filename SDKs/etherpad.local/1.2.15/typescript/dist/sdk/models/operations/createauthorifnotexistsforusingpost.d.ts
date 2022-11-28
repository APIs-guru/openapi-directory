import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAuthorIfNotExistsForUsingPostQueryParams extends SpeakeasyBase {
    authorMapper?: string;
    name?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData extends SpeakeasyBase {
    authorId?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateAuthorIfNotExistsForUsingPostQueryParams;
}
export declare class CreateAuthorIfNotExistsForUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createAuthorIfNotExistsForUsingPost200ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingPost200ApplicationJson;
    createAuthorIfNotExistsForUsingPost400ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingPost400ApplicationJson;
    createAuthorIfNotExistsForUsingPost401ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingPost401ApplicationJson;
    createAuthorIfNotExistsForUsingPost500ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingPost500ApplicationJson;
}
