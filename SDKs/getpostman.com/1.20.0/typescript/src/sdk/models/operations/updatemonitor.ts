import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMonitorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" })
  monitorUid: string;
}


export class UpdateMonitorRequestBodyMonitorSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cron" })
  cron?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class UpdateMonitorRequestBodyMonitor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: UpdateMonitorRequestBodyMonitorSchedule;
}


export class UpdateMonitorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monitor" })
  monitor?: UpdateMonitorRequestBodyMonitor;
}


export class UpdateMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateMonitor200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monitor" })
  monitor?: UpdateMonitor200ApplicationJsonMonitor;
}


export class UpdateMonitorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMonitorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateMonitorRequestBody;
}


export class UpdateMonitorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateMonitor200ApplicationJsonObject?: UpdateMonitor200ApplicationJson;
}
