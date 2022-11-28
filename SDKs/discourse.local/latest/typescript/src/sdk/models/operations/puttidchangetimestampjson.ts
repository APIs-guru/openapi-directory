import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutTIdChangeTimestampJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTIdChangeTimestampJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PutTIdChangeTimestampJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;
}


export class PutTIdChangeTimestampJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;
}


export class PutTIdChangeTimestampJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTIdChangeTimestampJsonPathParams;

  @SpeakeasyMetadata()
  headers: PutTIdChangeTimestampJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutTIdChangeTimestampJsonRequestBody;
}


export class PutTIdChangeTimestampJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putTIdChangeTimestampJson200ApplicationJsonObject?: PutTIdChangeTimestampJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
