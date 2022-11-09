import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutPostsIdLockedJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutPostsIdLockedJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PutPostsIdLockedJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=locked" })
  locked: boolean;
}


export class PutPostsIdLockedJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPostsIdLockedJsonPathParams;

  @Metadata()
  headers: PutPostsIdLockedJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutPostsIdLockedJsonRequestBody;
}


export class PutPostsIdLockedJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=locked" })
  locked?: boolean;
}


export class PutPostsIdLockedJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putPostsIdLockedJson200ApplicationJsonObject?: PutPostsIdLockedJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
