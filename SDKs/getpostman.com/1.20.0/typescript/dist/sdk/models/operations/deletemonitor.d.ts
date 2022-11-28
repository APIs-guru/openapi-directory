import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMonitorPathParams extends SpeakeasyBase {
    monitorUid: string;
}
export declare class DeleteMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
export declare class DeleteMonitor200ApplicationJson extends SpeakeasyBase {
    monitor?: DeleteMonitor200ApplicationJsonMonitor;
}
export declare class DeleteMonitor404ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class DeleteMonitor404ApplicationJson extends SpeakeasyBase {
    error?: DeleteMonitor404ApplicationJsonError;
}
export declare class DeleteMonitorRequest extends SpeakeasyBase {
    pathParams: DeleteMonitorPathParams;
}
export declare class DeleteMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteMonitor200ApplicationJsonObject?: DeleteMonitor200ApplicationJson;
    deleteMonitor404ApplicationJsonObject?: DeleteMonitor404ApplicationJson;
}
