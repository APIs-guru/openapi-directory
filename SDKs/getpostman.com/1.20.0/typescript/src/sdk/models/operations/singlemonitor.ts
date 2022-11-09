import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SingleMonitorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" })
  monitorUid: string;
}


export class SingleMonitorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SingleMonitorPathParams;
}


export class SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions extends SpeakeasyBase {
  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class SingleMonitor200ApplicationJsonMonitorLastRunStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=assertions" })
  assertions?: SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions;

  @Metadata({ data: "json, name=requests" })
  requests?: SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests;
}


export class SingleMonitor200ApplicationJsonMonitorLastRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=finishedAt" })
  finishedAt?: string;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: string;

  @Metadata({ data: "json, name=stats" })
  stats?: SingleMonitor200ApplicationJsonMonitorLastRunStats;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class SingleMonitor200ApplicationJsonMonitorNotificationsOnError extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class SingleMonitor200ApplicationJsonMonitorNotifications extends SpeakeasyBase {
  @Metadata({ data: "json, name=onError", elemType: operations.SingleMonitor200ApplicationJsonMonitorNotificationsOnError })
  onError?: SingleMonitor200ApplicationJsonMonitorNotificationsOnError[];

  @Metadata({ data: "json, name=onFailure", elemType: operations.SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure })
  onFailure?: SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure[];
}


export class SingleMonitor200ApplicationJsonMonitorOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=followRedirects" })
  followRedirects?: boolean;

  @Metadata({ data: "json, name=requestDelay" })
  requestDelay?: number;

  @Metadata({ data: "json, name=requestTimeout" })
  requestTimeout?: number;

  @Metadata({ data: "json, name=strictSSL" })
  strictSsl?: boolean;
}


export class SingleMonitor200ApplicationJsonMonitorSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=cron" })
  cron?: string;

  @Metadata({ data: "json, name=nextRun" })
  nextRun?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class SingleMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionUid" })
  collectionUid?: string;

  @Metadata({ data: "json, name=distribution" })
  distribution?: any[];

  @Metadata({ data: "json, name=environmentUid" })
  environmentUid?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastRun" })
  lastRun?: SingleMonitor200ApplicationJsonMonitorLastRun;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notifications" })
  notifications?: SingleMonitor200ApplicationJsonMonitorNotifications;

  @Metadata({ data: "json, name=options" })
  options?: SingleMonitor200ApplicationJsonMonitorOptions;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: SingleMonitor200ApplicationJsonMonitorSchedule;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class SingleMonitor200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=monitor" })
  monitor?: SingleMonitor200ApplicationJsonMonitor;
}


export class SingleMonitor404ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class SingleMonitor404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: SingleMonitor404ApplicationJsonError;
}


export class SingleMonitorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  singleMonitor200ApplicationJsonObject?: SingleMonitor200ApplicationJson;

  @Metadata()
  singleMonitor404ApplicationJsonObject?: SingleMonitor404ApplicationJson;
}
