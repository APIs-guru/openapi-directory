import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutTIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTIdJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PutTIdJsonRequestBodyTopic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PutTIdJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: PutTIdJsonRequestBodyTopic;
}


export class PutTIdJson200ApplicationJsonBasicTopic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fancy_title" })
  fancyTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=posts_count" })
  postsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PutTIdJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic_topic" })
  basicTopic?: PutTIdJson200ApplicationJsonBasicTopic;
}


export class PutTIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTIdJsonPathParams;

  @SpeakeasyMetadata()
  headers: PutTIdJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutTIdJsonRequestBody;
}


export class PutTIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putTIdJson200ApplicationJsonObject?: PutTIdJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
