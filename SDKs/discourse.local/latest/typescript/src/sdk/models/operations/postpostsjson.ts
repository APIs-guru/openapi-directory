import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPostsJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostPostsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPostsJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
