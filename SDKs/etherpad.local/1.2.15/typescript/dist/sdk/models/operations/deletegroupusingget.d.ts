import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteGroupUsingGetQueryParams extends SpeakeasyBase {
    groupId?: string;
}
export declare class DeleteGroupUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingGetRequest extends SpeakeasyBase {
    queryParams: DeleteGroupUsingGetQueryParams;
}
export declare class DeleteGroupUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteGroupUsingGet200ApplicationJsonObject?: DeleteGroupUsingGet200ApplicationJson;
    deleteGroupUsingGet400ApplicationJsonObject?: DeleteGroupUsingGet400ApplicationJson;
    deleteGroupUsingGet401ApplicationJsonObject?: DeleteGroupUsingGet401ApplicationJson;
    deleteGroupUsingGet500ApplicationJsonObject?: DeleteGroupUsingGet500ApplicationJson;
}
