import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutTIdChangeTimestampJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTIdChangeTimestampJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PutTIdChangeTimestampJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=timestamp" })
  timestamp: string;
}


export class PutTIdChangeTimestampJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTIdChangeTimestampJsonPathParams;

  @Metadata()
  headers: PutTIdChangeTimestampJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutTIdChangeTimestampJsonRequestBody;
}


export class PutTIdChangeTimestampJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: string;
}


export class PutTIdChangeTimestampJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putTIdChangeTimestampJson200ApplicationJsonObject?: PutTIdChangeTimestampJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
