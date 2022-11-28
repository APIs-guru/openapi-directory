import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupUsingPost200ApplicationJsonData extends SpeakeasyBase {
    groupId?: string;
}
export declare class CreateGroupUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateGroupUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupUsingPost200ApplicationJsonObject?: CreateGroupUsingPost200ApplicationJson;
    createGroupUsingPost400ApplicationJsonObject?: CreateGroupUsingPost400ApplicationJson;
    createGroupUsingPost401ApplicationJsonObject?: CreateGroupUsingPost401ApplicationJson;
    createGroupUsingPost500ApplicationJsonObject?: CreateGroupUsingPost500ApplicationJson;
}
