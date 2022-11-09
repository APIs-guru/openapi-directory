import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostUploadsJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: any;
}


export class PostUploadsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postUploadsJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
