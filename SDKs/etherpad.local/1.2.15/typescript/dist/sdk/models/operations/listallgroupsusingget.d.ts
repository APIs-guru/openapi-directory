import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAllGroupsUsingGet200ApplicationJsonData extends SpeakeasyBase {
    groupIDs?: string[];
}
export declare class ListAllGroupsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAllGroupsUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListAllGroupsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAllGroupsUsingGet200ApplicationJsonObject?: ListAllGroupsUsingGet200ApplicationJson;
    listAllGroupsUsingGet400ApplicationJsonObject?: ListAllGroupsUsingGet400ApplicationJson;
    listAllGroupsUsingGet401ApplicationJsonObject?: ListAllGroupsUsingGet401ApplicationJson;
    listAllGroupsUsingGet500ApplicationJsonObject?: ListAllGroupsUsingGet500ApplicationJson;
}
