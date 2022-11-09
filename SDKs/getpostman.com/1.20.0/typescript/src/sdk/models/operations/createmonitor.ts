import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMonitorRequestBodyMonitorSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=cron" })
  cron?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class CreateMonitorRequestBodyMonitor extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: CreateMonitorRequestBodyMonitorSchedule;
}


export class CreateMonitorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=monitor" })
  monitor?: CreateMonitorRequestBodyMonitor;
}


export class CreateMonitorRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateMonitorRequestBody;
}


export class CreateMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateMonitor200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=monitor" })
  monitor?: CreateMonitor200ApplicationJsonMonitor;
}


export class CreateMonitor400ApplicationJsonErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=param" })
  param?: string;
}


export class CreateMonitor400ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: CreateMonitor400ApplicationJsonErrorDetails;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateMonitor400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CreateMonitor400ApplicationJsonError;
}


export class CreateMonitorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createMonitor200ApplicationJsonObject?: CreateMonitor200ApplicationJson;

  @Metadata()
  createMonitor400ApplicationJsonObject?: CreateMonitor400ApplicationJson;
}
