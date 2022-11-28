import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCategoriesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostCategoriesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postCategoriesJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
