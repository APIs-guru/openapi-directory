import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTIdTimerJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostTIdTimerJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PostTIdTimerJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=based_on_last_post" })
  basedOnLastPost?: boolean;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: number;

  @Metadata({ data: "json, name=status_type" })
  statusType?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;
}


export class PostTIdTimerJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTIdTimerJsonPathParams;

  @Metadata()
  headers: PostTIdTimerJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostTIdTimerJsonRequestBody;
}


export class PostTIdTimerJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=based_on_last_post" })
  basedOnLastPost?: boolean;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: string;

  @Metadata({ data: "json, name=closed" })
  closed?: boolean;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=execute_at" })
  executeAt?: string;

  @Metadata({ data: "json, name=success" })
  success?: string;
}


export class PostTIdTimerJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postTIdTimerJson200ApplicationJsonObject?: PostTIdTimerJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
