import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAllGroupsUsingPost200ApplicationJsonData extends SpeakeasyBase {
    groupIDs?: string[];
}
export declare class ListAllGroupsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAllGroupsUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListAllGroupsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAllGroupsUsingPost200ApplicationJsonObject?: ListAllGroupsUsingPost200ApplicationJson;
    listAllGroupsUsingPost400ApplicationJsonObject?: ListAllGroupsUsingPost400ApplicationJson;
    listAllGroupsUsingPost401ApplicationJsonObject?: ListAllGroupsUsingPost401ApplicationJson;
    listAllGroupsUsingPost500ApplicationJsonObject?: ListAllGroupsUsingPost500ApplicationJson;
}
