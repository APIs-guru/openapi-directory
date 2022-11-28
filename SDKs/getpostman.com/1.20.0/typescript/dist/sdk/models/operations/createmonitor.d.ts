import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateMonitorRequestBodyMonitorSchedule extends SpeakeasyBase {
    cron?: string;
    timezone?: string;
}
export declare class CreateMonitorRequestBodyMonitor extends SpeakeasyBase {
    collection?: string;
    environment?: string;
    name?: string;
    schedule?: CreateMonitorRequestBodyMonitorSchedule;
}
export declare class CreateMonitorRequestBody extends SpeakeasyBase {
    monitor?: CreateMonitorRequestBodyMonitor;
}
export declare class CreateMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class CreateMonitor200ApplicationJson extends SpeakeasyBase {
    monitor?: CreateMonitor200ApplicationJsonMonitor;
}
export declare class CreateMonitor400ApplicationJsonErrorDetails extends SpeakeasyBase {
    param?: string;
}
export declare class CreateMonitor400ApplicationJsonError extends SpeakeasyBase {
    details?: CreateMonitor400ApplicationJsonErrorDetails;
    message?: string;
    name?: string;
}
export declare class CreateMonitor400ApplicationJson extends SpeakeasyBase {
    error?: CreateMonitor400ApplicationJsonError;
}
export declare class CreateMonitorRequest extends SpeakeasyBase {
    request?: CreateMonitorRequestBody;
}
export declare class CreateMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createMonitor200ApplicationJsonObject?: CreateMonitor200ApplicationJson;
    createMonitor400ApplicationJsonObject?: CreateMonitor400ApplicationJson;
}
