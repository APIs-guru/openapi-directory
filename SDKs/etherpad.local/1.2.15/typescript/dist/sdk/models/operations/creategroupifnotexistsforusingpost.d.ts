import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupIfNotExistsForUsingPostQueryParams extends SpeakeasyBase {
    groupMapper?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost200ApplicationJsonData extends SpeakeasyBase {
    groupId?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupIfNotExistsForUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateGroupIfNotExistsForUsingPostQueryParams;
}
export declare class CreateGroupIfNotExistsForUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupIfNotExistsForUsingPost200ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost200ApplicationJson;
    createGroupIfNotExistsForUsingPost400ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost400ApplicationJson;
    createGroupIfNotExistsForUsingPost401ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost401ApplicationJson;
    createGroupIfNotExistsForUsingPost500ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost500ApplicationJson;
}
