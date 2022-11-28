import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupIfNotExistsForUsingGetQueryParams extends SpeakeasyBase {
    groupMapper?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet200ApplicationJsonData extends SpeakeasyBase {
    groupId?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupIfNotExistsForUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateGroupIfNotExistsForUsingGetQueryParams;
}
export declare class CreateGroupIfNotExistsForUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupIfNotExistsForUsingGet200ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet200ApplicationJson;
    createGroupIfNotExistsForUsingGet400ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet400ApplicationJson;
    createGroupIfNotExistsForUsingGet401ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet401ApplicationJson;
    createGroupIfNotExistsForUsingGet500ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet500ApplicationJson;
}
