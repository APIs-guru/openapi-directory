import { SpeakeasyBase } from "../../../internal/utils";
export declare class SyncRelationsWithSchemaPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
    entityId: string;
    entityType: string;
}
export declare class SyncRelationsWithSchema200ApplicationJson extends SpeakeasyBase {
    success?: boolean;
}
export declare class SyncRelationsWithSchema400ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class SyncRelationsWithSchema400ApplicationJson extends SpeakeasyBase {
    error?: SyncRelationsWithSchema400ApplicationJsonError;
}
export declare class SyncRelationsWithSchemaRequest extends SpeakeasyBase {
    pathParams: SyncRelationsWithSchemaPathParams;
}
export declare class SyncRelationsWithSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncRelationsWithSchema200ApplicationJsonObject?: SyncRelationsWithSchema200ApplicationJson;
    syncRelationsWithSchema400ApplicationJsonObject?: SyncRelationsWithSchema400ApplicationJson;
}
