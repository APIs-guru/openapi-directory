import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMonitorRequestBodyMonitorSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cron" })
  cron?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class CreateMonitorRequestBodyMonitor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: CreateMonitorRequestBodyMonitorSchedule;
}


export class CreateMonitorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monitor" })
  monitor?: CreateMonitorRequestBodyMonitor;
}


export class CreateMonitor200ApplicationJsonMonitor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateMonitor200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monitor" })
  monitor?: CreateMonitor200ApplicationJsonMonitor;
}


export class CreateMonitor400ApplicationJsonErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=param" })
  param?: string;
}


export class CreateMonitor400ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: CreateMonitor400ApplicationJsonErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateMonitor400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CreateMonitor400ApplicationJsonError;
}


export class CreateMonitorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateMonitorRequestBody;
}


export class CreateMonitorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createMonitor200ApplicationJsonObject?: CreateMonitor200ApplicationJson;

  @SpeakeasyMetadata()
  createMonitor400ApplicationJsonObject?: CreateMonitor400ApplicationJson;
}
