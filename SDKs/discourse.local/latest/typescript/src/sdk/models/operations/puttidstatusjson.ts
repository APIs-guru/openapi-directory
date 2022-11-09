import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutTIdStatusJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTIdStatusJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}

export enum PutTIdStatusJsonRequestBodyEnabledEnum {
    True = "true"
,    False = "false"
}

export enum PutTIdStatusJsonRequestBodyStatusEnum {
    Closed = "closed"
,    Pinned = "pinned"
,    PinnedGlobally = "pinned_globally"
,    Archived = "archived"
,    Visible = "visible"
}


export class PutTIdStatusJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: PutTIdStatusJsonRequestBodyEnabledEnum;

  @Metadata({ data: "json, name=status" })
  status: PutTIdStatusJsonRequestBodyStatusEnum;

  @Metadata({ data: "json, name=until" })
  until?: string;
}


export class PutTIdStatusJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTIdStatusJsonPathParams;

  @Metadata()
  headers: PutTIdStatusJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutTIdStatusJsonRequestBody;
}


export class PutTIdStatusJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: string;

  @Metadata({ data: "json, name=topic_status_update" })
  topicStatusUpdate?: string;
}


export class PutTIdStatusJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putTIdStatusJson200ApplicationJsonObject?: PutTIdStatusJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
