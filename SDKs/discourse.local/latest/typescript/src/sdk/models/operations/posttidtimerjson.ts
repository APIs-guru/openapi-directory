import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTIdTimerJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostTIdTimerJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PostTIdTimerJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=based_on_last_post" })
  basedOnLastPost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=status_type" })
  statusType?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}


export class PostTIdTimerJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=based_on_last_post" })
  basedOnLastPost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=closed" })
  closed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=execute_at" })
  executeAt?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;
}


export class PostTIdTimerJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTIdTimerJsonPathParams;

  @SpeakeasyMetadata()
  headers: PostTIdTimerJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostTIdTimerJsonRequestBody;
}


export class PostTIdTimerJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postTIdTimerJson200ApplicationJsonObject?: PostTIdTimerJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
