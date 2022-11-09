import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMonitorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" })
  monitorUid: string;
}


export class DeleteMonitorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMonitorPathParams;
}


export class DeleteMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class DeleteMonitor200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=monitor" })
  monitor?: DeleteMonitor200ApplicationJsonMonitor;
}


export class DeleteMonitor404ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class DeleteMonitor404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteMonitor404ApplicationJsonError;
}


export class DeleteMonitorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteMonitor200ApplicationJsonObject?: DeleteMonitor200ApplicationJson;

  @Metadata()
  deleteMonitor404ApplicationJsonObject?: DeleteMonitor404ApplicationJson;
}
