import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUploadsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: any;
}


export class PostUploadsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postUploadsJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
