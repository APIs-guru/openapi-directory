import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMonitorPathParams extends SpeakeasyBase {
    monitorUid: string;
}
export declare class UpdateMonitorRequestBodyMonitorSchedule extends SpeakeasyBase {
    cron?: string;
    timezone?: string;
}
export declare class UpdateMonitorRequestBodyMonitor extends SpeakeasyBase {
    name?: string;
    schedule?: UpdateMonitorRequestBodyMonitorSchedule;
}
export declare class UpdateMonitorRequestBody extends SpeakeasyBase {
    monitor?: UpdateMonitorRequestBodyMonitor;
}
export declare class UpdateMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class UpdateMonitor200ApplicationJson extends SpeakeasyBase {
    monitor?: UpdateMonitor200ApplicationJsonMonitor;
}
export declare class UpdateMonitorRequest extends SpeakeasyBase {
    pathParams: UpdateMonitorPathParams;
    request?: UpdateMonitorRequestBody;
}
export declare class UpdateMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateMonitor200ApplicationJsonObject?: UpdateMonitor200ApplicationJson;
}
