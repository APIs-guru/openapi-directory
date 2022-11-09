import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RunAMonitorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" })
  monitorUid: string;
}


export class RunAMonitorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RunAMonitorPathParams;
}


export class RunAMonitor200ApplicationJsonRunExecutionsItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentLength" })
  contentLength?: number;

  @Metadata({ data: "json, name=mode" })
  mode?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=accept" })
  accept?: string;

  @Metadata({ data: "json, name=accept-encoding" })
  acceptEncoding?: string;

  @Metadata({ data: "json, name=content-length" })
  contentLength?: number;

  @Metadata({ data: "json, name=content-type" })
  contentType?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: RunAMonitor200ApplicationJsonRunExecutionsRequestBody;

  @Metadata({ data: "json, name=headers" })
  headers?: RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsResponseBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentLength" })
  contentLength?: number;
}


export class RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection" })
  connection?: string;

  @Metadata({ data: "json, name=content-encoding" })
  contentEncoding?: string;

  @Metadata({ data: "json, name=content-type" })
  contentType?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=transfer-encoding" })
  transferEncoding?: string;
}


export class RunAMonitor200ApplicationJsonRunExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: RunAMonitor200ApplicationJsonRunExecutionsResponseBody;

  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=headers" })
  headers?: RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders;

  @Metadata({ data: "json, name=responseSize" })
  responseSize?: number;

  @Metadata({ data: "json, name=responseTime" })
  responseTime?: number;
}


export class RunAMonitor200ApplicationJsonRunExecutions extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=item" })
  item?: RunAMonitor200ApplicationJsonRunExecutionsItem;

  @Metadata({ data: "json, name=request" })
  request?: RunAMonitor200ApplicationJsonRunExecutionsRequest;

  @Metadata({ data: "json, name=response" })
  response?: RunAMonitor200ApplicationJsonRunExecutionsResponse;
}


export class RunAMonitor200ApplicationJsonRunFailuresAssertion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status code is 400" })
  statusCodeIs400?: boolean;
}


export class RunAMonitor200ApplicationJsonRunFailures extends SpeakeasyBase {
  @Metadata({ data: "json, name=assertion" })
  assertion?: RunAMonitor200ApplicationJsonRunFailuresAssertion;

  @Metadata({ data: "json, name=executionId" })
  executionId?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RunAMonitor200ApplicationJsonRunInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionUid" })
  collectionUid?: string;

  @Metadata({ data: "json, name=finishedAt" })
  finishedAt?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=monitorId" })
  monitorId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class RunAMonitor200ApplicationJsonRunStatsAssertions extends SpeakeasyBase {
  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class RunAMonitor200ApplicationJsonRunStatsRequests extends SpeakeasyBase {
  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class RunAMonitor200ApplicationJsonRunStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=assertions" })
  assertions?: RunAMonitor200ApplicationJsonRunStatsAssertions;

  @Metadata({ data: "json, name=requests" })
  requests?: RunAMonitor200ApplicationJsonRunStatsRequests;
}


export class RunAMonitor200ApplicationJsonRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=executions", elemType: operations.RunAMonitor200ApplicationJsonRunExecutions })
  executions?: RunAMonitor200ApplicationJsonRunExecutions[];

  @Metadata({ data: "json, name=failures", elemType: operations.RunAMonitor200ApplicationJsonRunFailures })
  failures?: RunAMonitor200ApplicationJsonRunFailures[];

  @Metadata({ data: "json, name=info" })
  info?: RunAMonitor200ApplicationJsonRunInfo;

  @Metadata({ data: "json, name=stats" })
  stats?: RunAMonitor200ApplicationJsonRunStats;
}


export class RunAMonitor200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=run" })
  run?: RunAMonitor200ApplicationJsonRun;
}


export class RunAMonitorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  runAMonitor200ApplicationJsonObject?: RunAMonitor200ApplicationJson;
}
