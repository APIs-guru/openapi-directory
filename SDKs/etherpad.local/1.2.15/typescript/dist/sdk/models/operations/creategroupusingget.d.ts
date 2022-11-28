import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupUsingGet200ApplicationJsonData extends SpeakeasyBase {
    groupId?: string;
}
export declare class CreateGroupUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateGroupUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupUsingGet200ApplicationJsonObject?: CreateGroupUsingGet200ApplicationJson;
    createGroupUsingGet400ApplicationJsonObject?: CreateGroupUsingGet400ApplicationJson;
    createGroupUsingGet401ApplicationJsonObject?: CreateGroupUsingGet401ApplicationJson;
    createGroupUsingGet500ApplicationJsonObject?: CreateGroupUsingGet500ApplicationJson;
}
