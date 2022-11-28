import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RunAMonitorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" })
  monitorUid: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentLength" })
  contentLength?: number;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accept" })
  accept?: string;

  @SpeakeasyMetadata({ data: "json, name=accept-encoding" })
  acceptEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=content-length" })
  contentLength?: number;

  @SpeakeasyMetadata({ data: "json, name=content-type" })
  contentType?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: RunAMonitor200ApplicationJsonRunExecutionsRequestBody;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentLength" })
  contentLength?: number;
}


export class RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: string;

  @SpeakeasyMetadata({ data: "json, name=content-encoding" })
  contentEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=content-type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=transfer-encoding" })
  transferEncoding?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: RunAMonitor200ApplicationJsonRunExecutionsResponseBody;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders;

  @SpeakeasyMetadata({ data: "json, name=responseSize" })
  responseSize?: number;

  @SpeakeasyMetadata({ data: "json, name=responseTime" })
  responseTime?: number;
}


export class RunAMonitor200ApplicationJsonRunExecutions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: RunAMonitor200ApplicationJsonRunExecutionsItem;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: RunAMonitor200ApplicationJsonRunExecutionsRequest;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: RunAMonitor200ApplicationJsonRunExecutionsResponse;
}


export class RunAMonitor200ApplicationJsonRunFailuresAssertion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status code is 400" })
  statusCodeIs400?: boolean;
}


export class RunAMonitor200ApplicationJsonRunFailures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assertion" })
  assertion?: RunAMonitor200ApplicationJsonRunFailuresAssertion;

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RunAMonitor200ApplicationJsonRunInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionUid" })
  collectionUid?: string;

  @SpeakeasyMetadata({ data: "json, name=finishedAt" })
  finishedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=monitorId" })
  monitorId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class RunAMonitor200ApplicationJsonRunStatsAssertions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class RunAMonitor200ApplicationJsonRunStatsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class RunAMonitor200ApplicationJsonRunStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assertions" })
  assertions?: RunAMonitor200ApplicationJsonRunStatsAssertions;

  @SpeakeasyMetadata({ data: "json, name=requests" })
  requests?: RunAMonitor200ApplicationJsonRunStatsRequests;
}


export class RunAMonitor200ApplicationJsonRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executions", elemType: RunAMonitor200ApplicationJsonRunExecutions })
  executions?: RunAMonitor200ApplicationJsonRunExecutions[];

  @SpeakeasyMetadata({ data: "json, name=failures", elemType: RunAMonitor200ApplicationJsonRunFailures })
  failures?: RunAMonitor200ApplicationJsonRunFailures[];

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: RunAMonitor200ApplicationJsonRunInfo;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: RunAMonitor200ApplicationJsonRunStats;
}


export class RunAMonitor200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: RunAMonitor200ApplicationJsonRun;
}


export class RunAMonitorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RunAMonitorPathParams;
}


export class RunAMonitorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runAMonitor200ApplicationJsonObject?: RunAMonitor200ApplicationJson;
}
