import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSessionUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sessionID" })
  sessionId?: string;
}


export class DeleteSessionUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteSessionUsingGetQueryParams;
}


export class DeleteSessionUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteSessionUsingGet200ApplicationJsonObject?: DeleteSessionUsingGet200ApplicationJson;

  @Metadata()
  deleteSessionUsingGet400ApplicationJsonObject?: DeleteSessionUsingGet400ApplicationJson;

  @Metadata()
  deleteSessionUsingGet401ApplicationJsonObject?: DeleteSessionUsingGet401ApplicationJson;

  @Metadata()
  deleteSessionUsingGet500ApplicationJsonObject?: DeleteSessionUsingGet500ApplicationJson;
}
