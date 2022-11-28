import { SpeakeasyBase } from "../../../internal/utils";
export declare class RunAMonitorPathParams extends SpeakeasyBase {
    monitorUid: string;
}
export declare class RunAMonitor200ApplicationJsonRunExecutionsItem extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class RunAMonitor200ApplicationJsonRunExecutionsRequestBody extends SpeakeasyBase {
    contentLength?: number;
    mode?: string;
}
export declare class RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders extends SpeakeasyBase {
    accept?: string;
    acceptEncoding?: string;
    contentLength?: number;
    contentType?: string;
}
export declare class RunAMonitor200ApplicationJsonRunExecutionsRequest extends SpeakeasyBase {
    body?: RunAMonitor200ApplicationJsonRunExecutionsRequestBody;
    headers?: RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders;
    method?: string;
    timestamp?: string;
    url?: string;
}
export declare class RunAMonitor200ApplicationJsonRunExecutionsResponseBody extends SpeakeasyBase {
    contentLength?: number;
}
export declare class RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders extends SpeakeasyBase {
    connection?: string;
    contentEncoding?: string;
    contentType?: string;
    date?: string;
    transferEncoding?: string;
}
export declare class RunAMonitor200ApplicationJsonRunExecutionsResponse extends SpeakeasyBase {
    body?: RunAMonitor200ApplicationJsonRunExecutionsResponseBody;
    code?: number;
    headers?: RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders;
    responseSize?: number;
    responseTime?: number;
}
export declare class RunAMonitor200ApplicationJsonRunExecutions extends SpeakeasyBase {
    id?: number;
    item?: RunAMonitor200ApplicationJsonRunExecutionsItem;
    request?: RunAMonitor200ApplicationJsonRunExecutionsRequest;
    response?: RunAMonitor200ApplicationJsonRunExecutionsResponse;
}
export declare class RunAMonitor200ApplicationJsonRunFailuresAssertion extends SpeakeasyBase {
    statusCodeIs400?: boolean;
}
export declare class RunAMonitor200ApplicationJsonRunFailures extends SpeakeasyBase {
    assertion?: RunAMonitor200ApplicationJsonRunFailuresAssertion;
    executionId?: number;
    message?: string;
    name?: string;
}
export declare class RunAMonitor200ApplicationJsonRunInfo extends SpeakeasyBase {
    collectionUid?: string;
    finishedAt?: string;
    jobId?: string;
    monitorId?: string;
    name?: string;
    startedAt?: string;
    status?: string;
}
export declare class RunAMonitor200ApplicationJsonRunStatsAssertions extends SpeakeasyBase {
    failed?: number;
    total?: number;
}
export declare class RunAMonitor200ApplicationJsonRunStatsRequests extends SpeakeasyBase {
    failed?: number;
    total?: number;
}
export declare class RunAMonitor200ApplicationJsonRunStats extends SpeakeasyBase {
    assertions?: RunAMonitor200ApplicationJsonRunStatsAssertions;
    requests?: RunAMonitor200ApplicationJsonRunStatsRequests;
}
export declare class RunAMonitor200ApplicationJsonRun extends SpeakeasyBase {
    executions?: RunAMonitor200ApplicationJsonRunExecutions[];
    failures?: RunAMonitor200ApplicationJsonRunFailures[];
    info?: RunAMonitor200ApplicationJsonRunInfo;
    stats?: RunAMonitor200ApplicationJsonRunStats;
}
export declare class RunAMonitor200ApplicationJson extends SpeakeasyBase {
    run?: RunAMonitor200ApplicationJsonRun;
}
export declare class RunAMonitorRequest extends SpeakeasyBase {
    pathParams: RunAMonitorPathParams;
}
export declare class RunAMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runAMonitor200ApplicationJsonObject?: RunAMonitor200ApplicationJson;
}
