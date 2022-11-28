import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteGroupUsingPostQueryParams extends SpeakeasyBase {
    groupId?: string;
}
export declare class DeleteGroupUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingPostRequest extends SpeakeasyBase {
    queryParams: DeleteGroupUsingPostQueryParams;
}
export declare class DeleteGroupUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteGroupUsingPost200ApplicationJsonObject?: DeleteGroupUsingPost200ApplicationJson;
    deleteGroupUsingPost400ApplicationJsonObject?: DeleteGroupUsingPost400ApplicationJson;
    deleteGroupUsingPost401ApplicationJsonObject?: DeleteGroupUsingPost401ApplicationJson;
    deleteGroupUsingPost500ApplicationJsonObject?: DeleteGroupUsingPost500ApplicationJson;
}
