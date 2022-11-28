import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SingleMonitorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" })
  monitorUid: string;
}


export class SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class SingleMonitor200ApplicationJsonMonitorLastRunStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assertions" })
  assertions?: SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions;

  @SpeakeasyMetadata({ data: "json, name=requests" })
  requests?: SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests;
}


export class SingleMonitor200ApplicationJsonMonitorLastRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finishedAt" })
  finishedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: SingleMonitor200ApplicationJsonMonitorLastRunStats;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class SingleMonitor200ApplicationJsonMonitorNotificationsOnError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}


export class SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}


export class SingleMonitor200ApplicationJsonMonitorNotifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=onError", elemType: SingleMonitor200ApplicationJsonMonitorNotificationsOnError })
  onError?: SingleMonitor200ApplicationJsonMonitorNotificationsOnError[];

  @SpeakeasyMetadata({ data: "json, name=onFailure", elemType: SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure })
  onFailure?: SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure[];
}


export class SingleMonitor200ApplicationJsonMonitorOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=followRedirects" })
  followRedirects?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requestDelay" })
  requestDelay?: number;

  @SpeakeasyMetadata({ data: "json, name=requestTimeout" })
  requestTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=strictSSL" })
  strictSsl?: boolean;
}


export class SingleMonitor200ApplicationJsonMonitorSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cron" })
  cron?: string;

  @SpeakeasyMetadata({ data: "json, name=nextRun" })
  nextRun?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class SingleMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionUid" })
  collectionUid?: string;

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: any[];

  @SpeakeasyMetadata({ data: "json, name=environmentUid" })
  environmentUid?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRun" })
  lastRun?: SingleMonitor200ApplicationJsonMonitorLastRun;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications" })
  notifications?: SingleMonitor200ApplicationJsonMonitorNotifications;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: SingleMonitor200ApplicationJsonMonitorOptions;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: SingleMonitor200ApplicationJsonMonitorSchedule;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class SingleMonitor200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monitor" })
  monitor?: SingleMonitor200ApplicationJsonMonitor;
}


export class SingleMonitor404ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class SingleMonitor404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: SingleMonitor404ApplicationJsonError;
}


export class SingleMonitorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SingleMonitorPathParams;
}


export class SingleMonitorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  singleMonitor200ApplicationJsonObject?: SingleMonitor200ApplicationJson;

  @SpeakeasyMetadata()
  singleMonitor404ApplicationJsonObject?: SingleMonitor404ApplicationJson;
}
