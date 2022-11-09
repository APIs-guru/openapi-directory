import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutTIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTIdJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PutTIdJsonRequestBodyTopic extends SpeakeasyBase {
  @Metadata({ data: "json, name=category_id" })
  categoryId?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PutTIdJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic" })
  topic?: PutTIdJsonRequestBodyTopic;
}


export class PutTIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTIdJsonPathParams;

  @Metadata()
  headers: PutTIdJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutTIdJsonRequestBody;
}


export class PutTIdJson200ApplicationJsonBasicTopic extends SpeakeasyBase {
  @Metadata({ data: "json, name=fancy_title" })
  fancyTitle?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=posts_count" })
  postsCount?: number;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PutTIdJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=basic_topic" })
  basicTopic?: PutTIdJson200ApplicationJsonBasicTopic;
}


export class PutTIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putTIdJson200ApplicationJsonObject?: PutTIdJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
