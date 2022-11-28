import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAuthorUsingPostQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class CreateAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
    authorId?: string;
}
export declare class CreateAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateAuthorUsingPostQueryParams;
}
export declare class CreateAuthorUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createAuthorUsingPost200ApplicationJsonObject?: CreateAuthorUsingPost200ApplicationJson;
    createAuthorUsingPost400ApplicationJsonObject?: CreateAuthorUsingPost400ApplicationJson;
    createAuthorUsingPost401ApplicationJsonObject?: CreateAuthorUsingPost401ApplicationJson;
    createAuthorUsingPost500ApplicationJsonObject?: CreateAuthorUsingPost500ApplicationJson;
}
