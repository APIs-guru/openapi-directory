import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMonitorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" })
  monitorUid: string;
}


export class DeleteMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class DeleteMonitor200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monitor" })
  monitor?: DeleteMonitor200ApplicationJsonMonitor;
}


export class DeleteMonitor404ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class DeleteMonitor404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: DeleteMonitor404ApplicationJsonError;
}


export class DeleteMonitorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMonitorPathParams;
}


export class DeleteMonitorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteMonitor200ApplicationJsonObject?: DeleteMonitor200ApplicationJson;

  @SpeakeasyMetadata()
  deleteMonitor404ApplicationJsonObject?: DeleteMonitor404ApplicationJson;
}
