import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPostsIdLockedJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutPostsIdLockedJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PutPostsIdLockedJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked: boolean;
}


export class PutPostsIdLockedJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;
}


export class PutPostsIdLockedJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPostsIdLockedJsonPathParams;

  @SpeakeasyMetadata()
  headers: PutPostsIdLockedJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutPostsIdLockedJsonRequestBody;
}


export class PutPostsIdLockedJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putPostsIdLockedJson200ApplicationJsonObject?: PutPostsIdLockedJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
