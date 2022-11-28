import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPostsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostPostsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPostsJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
