import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSessionUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionID" })
  sessionId?: string;
}


export class DeleteSessionUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteSessionUsingGetQueryParams;
}


export class DeleteSessionUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteSessionUsingGet200ApplicationJsonObject?: DeleteSessionUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  deleteSessionUsingGet400ApplicationJsonObject?: DeleteSessionUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  deleteSessionUsingGet401ApplicationJsonObject?: DeleteSessionUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  deleteSessionUsingGet500ApplicationJsonObject?: DeleteSessionUsingGet500ApplicationJson;
}
