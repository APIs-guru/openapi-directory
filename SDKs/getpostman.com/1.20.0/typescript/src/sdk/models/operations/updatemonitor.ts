import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMonitorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" })
  monitorUid: string;
}


export class UpdateMonitorRequestBodyMonitorSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=cron" })
  cron?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class UpdateMonitorRequestBodyMonitor extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: UpdateMonitorRequestBodyMonitorSchedule;
}


export class UpdateMonitorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=monitor" })
  monitor?: UpdateMonitorRequestBodyMonitor;
}


export class UpdateMonitorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMonitorPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateMonitorRequestBody;
}


export class UpdateMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateMonitor200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=monitor" })
  monitor?: UpdateMonitor200ApplicationJsonMonitor;
}


export class UpdateMonitorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateMonitor200ApplicationJsonObject?: UpdateMonitor200ApplicationJson;
}
