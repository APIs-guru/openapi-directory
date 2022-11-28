import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMonitorRelationsPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetMonitorRelations200ApplicationJsonMonitor extends SpeakeasyBase {
    id?: string;
    monitorId?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetMonitorRelations200ApplicationJson extends SpeakeasyBase {
    monitor?: GetMonitorRelations200ApplicationJsonMonitor[];
}
export declare class GetMonitorRelationsRequest extends SpeakeasyBase {
    pathParams: GetMonitorRelationsPathParams;
}
export declare class GetMonitorRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMonitorRelations200ApplicationJsonObject?: GetMonitorRelations200ApplicationJson;
}
