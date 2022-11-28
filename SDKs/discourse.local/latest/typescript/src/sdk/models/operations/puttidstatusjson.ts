import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutTIdStatusJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTIdStatusJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}

export enum PutTIdStatusJsonRequestBodyEnabledEnum {
    True = "true",
    False = "false"
}

export enum PutTIdStatusJsonRequestBodyStatusEnum {
    Closed = "closed",
    Pinned = "pinned",
    PinnedGlobally = "pinned_globally",
    Archived = "archived",
    Visible = "visible"
}


export class PutTIdStatusJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: PutTIdStatusJsonRequestBodyEnabledEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PutTIdStatusJsonRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=until" })
  until?: string;
}


export class PutTIdStatusJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;

  @SpeakeasyMetadata({ data: "json, name=topic_status_update" })
  topicStatusUpdate?: string;
}


export class PutTIdStatusJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTIdStatusJsonPathParams;

  @SpeakeasyMetadata()
  headers: PutTIdStatusJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutTIdStatusJsonRequestBody;
}


export class PutTIdStatusJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putTIdStatusJson200ApplicationJsonObject?: PutTIdStatusJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
