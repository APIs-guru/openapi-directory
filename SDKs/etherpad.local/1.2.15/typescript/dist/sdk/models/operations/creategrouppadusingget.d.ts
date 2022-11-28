import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupPadUsingGetQueryParams extends SpeakeasyBase {
    groupId?: string;
    padName?: string;
    text?: string;
}
export declare class CreateGroupPadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateGroupPadUsingGetQueryParams;
}
export declare class CreateGroupPadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupPadUsingGet200ApplicationJsonObject?: CreateGroupPadUsingGet200ApplicationJson;
    createGroupPadUsingGet400ApplicationJsonObject?: CreateGroupPadUsingGet400ApplicationJson;
    createGroupPadUsingGet401ApplicationJsonObject?: CreateGroupPadUsingGet401ApplicationJson;
    createGroupPadUsingGet500ApplicationJsonObject?: CreateGroupPadUsingGet500ApplicationJson;
}
