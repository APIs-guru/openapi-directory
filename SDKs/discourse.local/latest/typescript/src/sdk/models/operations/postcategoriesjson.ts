import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostCategoriesJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostCategoriesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postCategoriesJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
