import { SpeakeasyBase } from "../../../internal/utils";
export declare class SingleMonitorPathParams extends SpeakeasyBase {
    monitorUid: string;
}
export declare class SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions extends SpeakeasyBase {
    failed?: number;
    total?: number;
}
export declare class SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests extends SpeakeasyBase {
    total?: number;
}
export declare class SingleMonitor200ApplicationJsonMonitorLastRunStats extends SpeakeasyBase {
    assertions?: SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions;
    requests?: SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests;
}
export declare class SingleMonitor200ApplicationJsonMonitorLastRun extends SpeakeasyBase {
    finishedAt?: string;
    startedAt?: string;
    stats?: SingleMonitor200ApplicationJsonMonitorLastRunStats;
    status?: string;
}
export declare class SingleMonitor200ApplicationJsonMonitorNotificationsOnError extends SpeakeasyBase {
    email?: string;
}
export declare class SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure extends SpeakeasyBase {
    email?: string;
}
export declare class SingleMonitor200ApplicationJsonMonitorNotifications extends SpeakeasyBase {
    onError?: SingleMonitor200ApplicationJsonMonitorNotificationsOnError[];
    onFailure?: SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure[];
}
export declare class SingleMonitor200ApplicationJsonMonitorOptions extends SpeakeasyBase {
    followRedirects?: boolean;
    requestDelay?: number;
    requestTimeout?: number;
    strictSsl?: boolean;
}
export declare class SingleMonitor200ApplicationJsonMonitorSchedule extends SpeakeasyBase {
    cron?: string;
    nextRun?: string;
    timezone?: string;
}
export declare class SingleMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
    collectionUid?: string;
    distribution?: any[];
    environmentUid?: string;
    id?: string;
    lastRun?: SingleMonitor200ApplicationJsonMonitorLastRun;
    name?: string;
    notifications?: SingleMonitor200ApplicationJsonMonitorNotifications;
    options?: SingleMonitor200ApplicationJsonMonitorOptions;
    owner?: string;
    schedule?: SingleMonitor200ApplicationJsonMonitorSchedule;
    uid?: string;
}
export declare class SingleMonitor200ApplicationJson extends SpeakeasyBase {
    monitor?: SingleMonitor200ApplicationJsonMonitor;
}
export declare class SingleMonitor404ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class SingleMonitor404ApplicationJson extends SpeakeasyBase {
    error?: SingleMonitor404ApplicationJsonError;
}
export declare class SingleMonitorRequest extends SpeakeasyBase {
    pathParams: SingleMonitorPathParams;
}
export declare class SingleMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    singleMonitor200ApplicationJsonObject?: SingleMonitor200ApplicationJson;
    singleMonitor404ApplicationJsonObject?: SingleMonitor404ApplicationJson;
}
